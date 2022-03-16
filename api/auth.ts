import { NowRequest, NowResponse } from '@vercel/node'

export const allowList: { [iat: string]: AllowListItem } = {
  'micurran': {
    publicKey: `-----BEGIN PUBLIC KEY-----
AAAAB3NzaC1yc2EAAAADAQABAAACAQDN9N66qqU2arW3CDND+KTB/3jmSDaFZtZKvv
H8yD5W7Xd4Ed/Uyb1b3oqxFIBtPxA+CN2k9cLoGw8+vLD3MhN9D/DIJWnywk4CKZ29
KKrOw9M+iykC02zSpSL4HfjxqthrBWvE9Jtf8ULe+FjSQYc/NwiqSEaTPilInyAb37
trqYpdFefc8xwu3oHFq7U35G7QQiJ2kNfIPmXSkbYiProbsfssfiWoab7JzPbbsuIC
3sikntOaceoHtqVDEiL7pnu9NW85aB/j8FNvVr5+XUEQ51i+qtjWrag86T71UgElo/
+jQFVvFSIJOg+qvriMYrxhbMP1dLIbzQLn+otMT58fPNNvwPPJcQ0Qe2kzedBeylry
Ed8rgOhbIEPwr+HkbD7ayF2On2xifiMl9zg7/OcM1J6K9+95IK15FmkSfOkhr+DUZY
1mghJCwLD8TiSunlR92FPvtNQSGQmg3l7CFKsuowimcyU7jwjk7v1iWIzDxd/thkqj
7oYvXgoxXMlb5ndhX3gBC83DQ8P0hWDLvPCKxZyGp0DBrSLvrAjJ9il5GIL+qxUxiq
aVRpiiQuG8gMEP2YQEZ3AGIYvw0h9afTPFeLdL8cwfFAxCdxEfwZyBhYHsU8tr2H2v
GoWewl1u2OQh5yd0FCso+nB3KHklHiplIWdRZmdva6g33z6uIaKM6Q
-----END PUBLIC KEY-----`,
  },
}

type AllowListItem = {
  publicKey: string
}

export default async function (req: NowRequest, res: NowResponse) {
  res.json(allowList)
}
