import os
from tqdm import tqdm

key = {
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
    "destination",
    "time",
    "jiaolu"
}

for file in tqdm(os.listdir("json")):
    s = open(f"json\\{file}", encoding="utf-8").read()
    for t in key:
        s = s.replace(f'"{t}"', t)
    with open(f"js\\{file.rstrip('json') + 'js'}", "w", encoding="utf-8") as f:
        f.write("const arrivalTimes = ")
        f.write(s)
        f.write(";export default arrivalTimes;")