

## Redis

#### Command 
```
ab -n 10000 -c 100 -p redis.json -T application/json -H "Content-Type: application/json" http://localhost:3000/send
```

#### redis.json
```
{"target": "redis", count: 100}
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
Document Length:        43 bytes

Concurrency Level:      100
Time taken for tests:   21.143 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      2500000 bytes
Total body sent:        2060000
HTML transferred:       430000 bytes
Requests per second:    472.97 [#/sec] (mean)
Time per request:       211.431 [ms] (mean)
Time per request:       2.114 [ms] (mean, across all concurrent requests)
Transfer rate:          115.47 [Kbytes/sec] received
                        95.15 kb/s sent
                        210.62 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   1.5      2      12
Processing:     9  209  14.4    209     247
Waiting:        1  125  28.4    127     213
Total:         10  211  14.1    211     247

Percentage of the requests served within a certain time (ms)
  50%    211
  66%    214
  75%    217
  80%    218
  90%    223
  95%    227
  98%    236
  99%    239
 100%    247 (longest request)
```

***

#### Command 
```
ab -n 10000 -c 100 -p redis.json -T application/json -H "Content-Type: application/json" http://localhost:3000/send
```

#### RabbitMQ.json
```
{"target": "redis", count: 1000}
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
Document Length:        44 bytes

Concurrency Level:      100
Time taken for tests:   187.175 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      2510000 bytes
Total body sent:        2070000
HTML transferred:       440000 bytes
Requests per second:    53.43 [#/sec] (mean)
Time per request:       1871.755 [ms] (mean)
Time per request:       18.718 [ms] (mean, across all concurrent requests)
Transfer rate:          13.10 [Kbytes/sec] received
                        10.80 kb/s sent
                        23.90 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   1.8      2      18
Processing:    28 1865 127.7   1883    3122
Waiting:        2 1103 295.5   1126    1938
Total:         29 1868 127.5   1885    3122

Percentage of the requests served within a certain time (ms)
  50%   1885
  66%   1895
  75%   1901
  80%   1906
  90%   1919
  95%   1937
  98%   1978
  99%   1988
 100%   3122 (longest request)
```