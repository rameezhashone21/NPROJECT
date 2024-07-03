export default{
    port : 1337,
    dbUri : "mongodb://localhost:27017/rest-api-tutorial",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    accessTokenPrivateKey: ``,
    accessTokenPublicKey: ``,
    refreshTokenPrivateKey: ``,
    refreshTokenPublicKey: ``,
    publicKey:`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDWrwpnUDiwV/+acvS0nZncDUAG
BAD0WvFjBG9CKGNIvVO6+5/+2etzkDQxxP8hCQZagQVmU7WcWo0IEuIicPnPc+Ox
DbyOKKSHlfB9iw+qjWajJDToMNukvKaXrSTmPjJVpJ7E/p117F2PfVNbcxruTRLD
1Bne/8CH+wnwfTXG+wIDAQAB
-----END PUBLIC KEY-----`,
    privateKey:`-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDWrwpnUDiwV/+acvS0nZncDUAGBAD0WvFjBG9CKGNIvVO6+5/+
2etzkDQxxP8hCQZagQVmU7WcWo0IEuIicPnPc+OxDbyOKKSHlfB9iw+qjWajJDTo
MNukvKaXrSTmPjJVpJ7E/p117F2PfVNbcxruTRLD1Bne/8CH+wnwfTXG+wIDAQAB
AoGAWRPuNCoEK5+HzlUulhbitXzF+PkGUF2/1P8NDx1k/NSZ/nbTz1IqsRu/nHsK
BXISMdFhJTFMpOCprhTvwayw6hEgrD4BQihO9QphKjuk9JqRBCGv3MdnqvKjbqL2
fW+YGh9h5fC7pnfEV5oh5c6cRR1SP6HQ8e4Q2d1IeOssizkCQQD9WgRVwFh+2R7U
MQ52KtW8HtcOJ0X9+IY9jMiDic2nAD0QgWXUy0zMsKA74KvrwMGKUaw+OIbKA20A
W+Y8i4CFAkEA2O2L21cVT47566ErwzbwhL8nMw704/a+kCMNJrbpRiwQbkT+NcpM
Q1HGBsYpbaHIIH9QzeYN1nWzDgNvKqaBfwJBAJseSFUwhX509Xk55/7VzzN1NnsF
9MbBKX/5+LMA5pd/f+PhNjYJm6Yf5puCvgCEbnt/8hPOjEiXvF9h5R/g0fkCQEYO
aUVb2VEJPqMfOM/htUlZpmIx6VqZvC82cq/XEH0OC/xgoaxjeb+f8BEN/CEgx03f
cAweyMdC2aGj8EnY3icCQQDeLB+o6NYjWdmOK4CH12hCVkvxho2PJtiKi4FVduYD
sNxQ4VakzqjEHj0Jol5ClnfvOliJ/ccBh/a86XEhZRb2
-----END RSA PRIVATE KEY-----`
}