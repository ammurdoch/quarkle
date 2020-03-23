import json
import sys

d = json.loads(sys.stdin.read())
print(d["FullSemVer"])

