

import os
from os.path import join, getsize

from replace import replace

for root, dirs, files in os.walk('.'):
    for filename in files:
        filepath =  os.sep.join([root, filename])
        realpath = os.path.realpath(filepath)
        
        _, ext = os.path.splitext(realpath) 
        #print ext
        if ext in [".html",".js"]:
            print realpath
            replace(realpath, "myApp", "maboApp")
        