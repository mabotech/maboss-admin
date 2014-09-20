# -*- coding: utf-8 -*-

import time
import math
import random
import json

def get_val():
    return math.floor(10000*random.random())/100
    
    
def main():

    """
    v = [ 1025409600000 , 13.153938631352]
     
    sec = v[0]/1000

    print time.ctime(sec)

    """

    dt = time.strptime("2014-09-19 15:00:00","%Y-%m-%d %H:%M:%S")

    #t2 = time.strptime("2014-09-15 08:00:00","%Y-%m-%d %H:%M:%S")

    t1 = time.mktime(dt)*1000
    print t1
    t2 = time.time()*1000
    print t2

    s = [[],[],[],[],[],[],[]]

    while t1<t2:
        
        x = []
        
        for i in xrange(0, 7):
            val = get_val()
            p = [int(t1), val]
            
            s[i].append(p)
             
        t1 = t1 + 3600000 # 30m

    

    d = {}

    d["measure"] = []

    i = 0
    for name in [u"运行",u"占用",u"空闲",u"故障",u"维护",u"停机",u"待机"]:
        vals = s[i]
        kv = {"key":name, "values":vals}
        i = i +1
        d["measure"].append(kv)
        
        

    s = json.dumps(d)

    with open("data3.json","w") as fh:
        
        fh.write(s)
    
if __name__ == "__main__":
    main()
