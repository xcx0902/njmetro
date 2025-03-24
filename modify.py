import os
from tqdm import tqdm

upd = [
    ("大交路", "全程"),
    ("小交路", "区间"),
]

for i in ["json", "js"]:
    for file in tqdm(os.listdir(i)):
        s = open(f"{i}\\{file}", encoding="utf-8").read()
        for (a, b) in upd:
            s = s.replace(a, b)
        with open(f"{i}\\{file}", "w", encoding="utf-8") as f:
            f.write(s)