#!/usr/bin/env python3
from git import Repo

if __name__ == "__main__":
    print("Start")
    versionfile = "./src/environments/version.ts"
    repo = Repo(search_parent_directories=True)
    version = repo.git.describe()

    with open(versionfile, "rt") as fin:
        data = fin.read()
        data = data.replace('autogenerated', version)
    
    with open(versionfile, "wt") as fout:
        fout.write(data)
        