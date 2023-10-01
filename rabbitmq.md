

## RabbitMQ

#### Command 
```
ab -n 10000 -c 100 -p rabbit.json -T application/json -H "Content-Type: application/json" http://localhost:3000/send
```

#### RabbitMQ.json
```
{"target": "rabbitmq", count: 100}
```



|Total Requests|Concurrancy Request| messages in single request |
|-------------------------------|-----------------------------|-----|
|10000           |100           |100 |

## Result
```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /send
Document Length:        46 bytes

Concurrency Level:      100
Time taken for tests:   16.008 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      2530000 bytes
Total body sent:        2100000
HTML transferred:       460000 bytes
Requests per second:    624.69 [#/sec] (mean)
Time per request:       160.078 [ms] (mean)
Time per request:       1.601 [ms] (mean, across all concurrent requests)
Transfer rate:          154.34 [Kbytes/sec] received
                        128.11 kb/s sent
                        282.45 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    5   3.7      4      25
Processing:    20  155  12.3    153     228
Waiting:        8   91  35.5     92     193
Total:         21  160  12.0    158     230

Percentage of the requests served within a certain time (ms)
  50%    158
  66%    162
  75%    164
  80%    167
  90%    172
  95%    177
  98%    185
  99%    208
 100%    230 (longest request)
```

***

#### Command 
```
ab -n 10000 -c 100 -p rabbit.json -T application/json -H "Content-Type: application/json" http://localhost:3000/send
```

#### RabbitMQ.json
```
{"target": "rabbitmq", count: 1000}
```



|Total Requests|Concurrancy Request| messages in single request |
|-------------------------------|-----------------------------|-----|
|10000           |100           |1000 |

## Result

```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /send
Document Length:        47 bytes

Concurrency Level:      100
Time taken for tests:   158.288 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      2540000 bytes
Total body sent:        2110000
HTML transferred:       470000 bytes
Requests per second:    63.18 [#/sec] (mean)
Time per request:       1582.883 [ms] (mean)
Time per request:       15.829 [ms] (mean, across all concurrent requests)
Transfer rate:          15.67 [Kbytes/sec] received
                        13.02 kb/s sent
                        28.69 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    4   2.7      4      27
Processing:    20 1577  99.1   1574    2159
Waiting:        1  822 256.4    837    1424
Total:         21 1581  99.0   1580    2164

Percentage of the requests served within a certain time (ms)
  50%   1580
  66%   1612
  75%   1627
  80%   1641
  90%   1669
  95%   1707
  98%   1734
  99%   1766
 100%   2164 (longest request)
```