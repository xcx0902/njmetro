import requests
import json

weekdays = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
    7: "sunday"
}

jiaolu = {
    "SHORT": "区间",
    "LOCAL": "全程",
    "NONSTOP": "快车",
    "EXPRESS": "快车",
    "THROUGH": "贯通快车"
}

def post(URL):
    while True:
        try:
            return json.loads(requests.post(URL).text)
        except:
            continue

def get(URL):
    while True:
        try:
            return json.loads(requests.get(URL).text)
        except:
            continue

def crawl_sch(station, id):
    URL = f"https://nmtr.online/metro-realtime/station/schedule/v3/{station}/{id}"

    data = post(URL)["data"]
    sch: list[dict] = data["schedules"]
    station = data["stationMap"]

    out = []

    def to_time(t):
        a = t // 3600
        b = t // 60 % 60
        c = t % 60
        return "{:02}:{:02}:{:02}".format(a, b, c)

    for schedule in sch:
        for (dest, dat) in schedule.items():
            for dat_ in dat:
                out.append({
                    "destination": station[dest]["name"],
                    "time": to_time(dat_[1]),
                    "jiaolu": jiaolu[dat_[2][0]]
                })

    out.sort(key=lambda x: x["time"])

    return out

def crawl_station_line(station, line):
    URL = f"https://nmtr.online/metro-realtime/schedules/header/get/line/{line}"
    data = get(URL)["data"]
    out = {}
    for d in data:
        p = crawl_sch(station, d["scheduleId"])
        for i in d["period"]:
            out[weekdays[i]] = p
    return out

def crawl_all():
    URL = "https://nmtr.online/file/railsystem/lines/NJMTR"
    data = get(URL)
    for line in data:
        line_id = line["id"]
        line_code = line["code"]
        for station in line["stations"]:
            station_name = station["name"]
            station_id = station["id"]
            print(station_name, line_code)
            with open(f"json\\{station_name}_{line_code}.json", "w", encoding="utf-8") as f:
                f.write(json.dumps(crawl_station_line(station_id, line_id), ensure_ascii=False))

if __name__ == "__main__":
    crawl_all()