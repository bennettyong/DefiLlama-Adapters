const ADDRESSES = require('../helper/coreAssets.json')

const { getUniqueAddresses } = require('../helper/utils')

// taken from https://www.binance.com/en/blog/community/our-commitment-to-transparency-2895840147147652626
const assetList = [
  ["1INCH", "BEP20", "0x29bdfbf7d27462a2d115748ace2bd71a2646946c"],
  ["1INCH", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["1INCH", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["1INCH", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["1INCH", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["1INCH", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["1INCH", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["1INCH", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["1INCH", "ETH", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"],
  ["1INCH", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["1INCH", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["APT", "APT", "0x5bd7de5c56d5691f32ea86c973c73fec7b1445e59736c97158020018c080bb00"],
  ["APT", "APT", "0x80174e0fe8cb2d32b038c6c888dd95c3e1560736f0d4a6e8bed6ae43b5c91f6f"],
  ["APT", "APT", "0xae1a6f3d3daccaf77b55044cea133379934bba04a11b9d0bbd643eae5e6e9c70"],
  ["APT", "APT", "0xd91c64b777e51395c6ea9dec562ed79a4afa0cd6dad5a87b187c37198a1f855a"],
  ["APT", "APT", "0xed8c46bec9dbc2b23c60568f822b95b87ea395f7e3fdb5e3adc0a30c55c0a60e"],
  ["ARB", "ARB", "0xb38e8c17e38363af6ebdcb3dae12e0243582891d"],
  ["ARB", "ARB", "0xf92402bb795fd7cd08fb83839689db79099c8c9c"],
  ["ARB", "ARB", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["ARB", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["BNB", "BEP2", "bnb142q467df6jun6rt5u2ar58sp47hm5f9wvz2cvg"],
  ["BNB", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["BNB", "BEP2", "bnb1lsmt5a8vqqus5fwslx8pyyemgjtg4y6ugj308t"],
  ["BNB", "BEP2", "bnb1m5amny2gs3xdyta6pksmr43zu4727w24syyks7"],
  ["BNB", "BEP2", "bnb1u2agwjat20494fmc6jnuau0ls937cfjn4pjwtn"],
  ["BNB", "BEP2", "bnb1xrfwzlu9c5208lhtn7ywt0mjrhjh4nt4fjyqxy"],
  ["BNB", "BEP20", "0x01c952174c24e1210d26961d456a77a39e1f0bb0"],
  ["BNB", "BEP20", "0x161ba15a5f335c9f06bb5bbb0a9ce14076fbb645"],
  ["BNB", "BEP20", "0x1fbe2acee135d991592f167ac371f3dd893a508b"],
  ["BNB", "BEP20", "0x29bdfbf7d27462a2d115748ace2bd71a2646946c"],
  ["BNB", "BEP20", "0x3c783c21a0383057d128bae431894a5c19f9cf06"],
  ["BNB", "BEP20", "0x515b72ed8a97f42c568d6a143232775018f133c8"],
  ["BNB", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["BNB", "BEP20", "0x73f5ebe90f27b46ea12e5795d16c4b408b19cc6f"],
  ["BNB", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["BNB", "BEP20", "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8"],
  ["BNB", "BEP20", "0xa180fe01b906a1be37be6c534a3300785b20d947"],
  ["BNB", "BEP20", "0xbd612a3f30dca67bf60a39fd0d35e39b7ab80774"],
  ["BNB", "BEP20", "0xdccf3b77da55107280bd850ea519df3705d1a75a"],
  ["BNB", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["BNB", "BEP20", "0xeb2d2f1b8c558a40207669291fda468e50c8a0bb"],
  ["BNB", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["BNB", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["BTC", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["BTC", "BEP2", "bnb1lsmt5a8vqqus5fwslx8pyyemgjtg4y6ugj308t"],
  ["BTC", "BEP2", "bnb1u2agwjat20494fmc6jnuau0ls937cfjn4pjwtn"],
  ["BTC", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["BTC", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["BTC", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["BTC", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"], 
  ["BTC", "BTC", "1Pzaqw98PeRfyHypfqyEgg5yycJRsENrE7"],
  ["BTC", "BTC", "34GUzCVLbdkMQ2UdVTaA4nxPwoovVS7y2J"],
  ["BTC", "BTC", "34HpHYiyQwg69gFmCq2BGHjF1DZnZnBeBP"],
  ["BTC", "BTC", "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo"],
  ["BTC", "BTC", "36zSLdRv1jyewjaC12fqK5fptn7PqewunL"],
  ["BTC", "BTC", "38DN2uFMZPiHLHJigfv4kWC9JWJrNnhLcn"],
  ["BTC", "BTC", "38Xnrq8MZiKmYmwobbYdZQ5nnCbX1qvQfE"],
  ["BTC", "BTC", "395vnFScKQ1ay695C6v7gf89UzoFpx3WuJ"],
  ["BTC", "BTC", "39884E3j6KZj82FK4vcCrkUvWYL5MQaS3v"],
  ["BTC", "BTC", "3AeUiDpPPUrUBS377584sFCpx8KLfpX9Ry"],
  ["BTC", "BTC", "3AtnehKDkFPC1bKvdrEVPSRGCtxQH8F1R8"],
  ["BTC", "BTC", "3CySuFKbBS29M7rE5iJakZRNqb3msMeFoN"],
  ["BTC", "BTC", "3EbJfpmFgufYtzW9UFvf1GAfm2ted1Rwnr"],
  ["BTC", "BTC", "3FHNBLobJnbCTFTVakh5TXmEneyf5PT61B"],
  ["BTC", "BTC", "3HdGoUTbcztBnS7UzY4vSPYhwr424CiWAA"],
  ["BTC", "BTC", "3JFJPpH8Chwo7CDbyYQ4XcfgcjEP1FGRMJ"],
  ["BTC", "BTC", "3JJmF63ifcamPLiAmLgG96RA599yNtY3EQ"],
  ["BTC", "BTC", "3LcgLHzTvjLKBixBvkKGiadtiw2GBSKKqH"],
  ["BTC", "BTC", "3M219KR5vEneNb47ewrPfWyb5jQ2DjxRP6"],
  ["BTC", "BTC", "3Me9QACjioepv2L2oKTC9QQ87NH6vFe1Zj"],
  ["BTC", "BTC", "3NXCvmLGz9SxYi6TnjbBQfQMcwiZ1iQETa"],
  ["BTC", "BTC", "3Qxak1CZhLyZ7GVckKphLURdLBCjMfz9bA"],
  ["BTC", "BTC", "bc1qm34lsc65zpw79lxes69zkqmk6ee3ewf0j77s3h"], //---
  ["BTC", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["BTC", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["BTC", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["BTC", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["BUSD", "AVAX", "0x4aefa39caeadd662ae31ab0ce7c8c2c9c0a013e8"],
  ["BUSD", "AVAX", "0x9f8c163cba728e99993abe7495f06c0a3c8ac8b9"],
  ["BUSD", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["BUSD", "BEP2", "bnb1lsmt5a8vqqus5fwslx8pyyemgjtg4y6ugj308t"],
  ["BUSD", "BEP2", "bnb1m5amny2gs3xdyta6pksmr43zu4727w24syyks7"],
  ["BUSD", "BEP2", "bnb1u2agwjat20494fmc6jnuau0ls937cfjn4pjwtn"],
  ["BUSD", "BEP2", "bnb1xrfwzlu9c5208lhtn7ywt0mjrhjh4nt4fjyqxy"],
  ["BUSD", "BEP20", "0x01c952174c24e1210d26961d456a77a39e1f0bb0"],
  ["BUSD", "BEP20", "0x161ba15a5f335c9f06bb5bbb0a9ce14076fbb645"],
  ["BUSD", "BEP20", "0x1fbe2acee135d991592f167ac371f3dd893a508b"],
  ["BUSD", "BEP20", "0x29bdfbf7d27462a2d115748ace2bd71a2646946c"],
  ["BUSD", "BEP20", "0x3c783c21a0383057d128bae431894a5c19f9cf06"],
  ["BUSD", "BEP20", "0x515b72ed8a97f42c568d6a143232775018f133c8"],
  ["BUSD", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["BUSD", "BEP20", "0x73f5ebe90f27b46ea12e5795d16c4b408b19cc6f"],
  ["BUSD", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["BUSD", "BEP20", "0xa180fe01b906a1be37be6c534a3300785b20d947"],
  ["BUSD", "BEP20", "0xbd612a3f30dca67bf60a39fd0d35e39b7ab80774"],
  ["BUSD", "BEP20", "0xdccf3b77da55107280bd850ea519df3705d1a75a"],
  ["BUSD", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["BUSD", "BEP20", "0xeb2d2f1b8c558a40207669291fda468e50c8a0bb"],
  ["BUSD", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["BUSD", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["BUSD", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["BUSD", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["BUSD", "ETH", "0x9696f59e4d72e237be84ffd425dcad154bf96976"],
  ["BUSD", "ETH", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"],
  ["BUSD", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["BUSD", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["BUSD", "MATIC", "0x5a52E96BAcdaBb82fd05763E25335261B270Efcb"],
  ["BUSD", "MATIC", "0xe7804c37c13166ff0b37f5ae0bb07a3aebb6e245"],
  ["BUSD", "MATIC", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["BUSD", "OP", "0xF977814e90dA44bFA03b6295A0616a897441aceC"],
  ["BUSD", "OP", "0xacd03d601e5bb1b275bb94076ff46ed9d753435a"],
  ["BUSD", "TRX", "TJCo98saj6WND61g1uuKwJ9GMWMT9WkJFo"],
  ["BUSD", "TRX", "TNXoiAJ3dct8Fjg4M9fkLFh9S2v9TXc32G"],
  ["BUSD", "TRX", "TV6MuMXfmLbBqPZvBHdwFsDnQeVfnmiuSi"],
  ["BUSD", "TRX", "TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],
  ["CHR", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["CHR", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["CHR", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["CHR", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["CHR", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["CHR", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["CHR", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["CHR", "ETH", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"],
  ["CHR", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["CHR", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["CHZ", "BEP2", "bnb142q467df6jun6rt5u2ar58sp47hm5f9wvz2cvg"],
  ["CHZ", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["CHZ", "BEP2", "bnb1m5amny2gs3xdyta6pksmr43zu4727w24syyks7"],
  ["CHZ", "BEP2", "bnb1u2agwjat20494fmc6jnuau0ls937cfjn4pjwtn"],
  ["CHZ", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["CHZ", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["CHZ", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["CHZ", "ETH", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"],
  ["CHZ", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["CHZ", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["CRV", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["CRV", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["CRV", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["CRV", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["CVP", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["CVP", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["CVP", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["CVP", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["CVP", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["CVP", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["CVP", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["CVP", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["DOGE", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["DOGE", "BEP20", "0x01c952174c24e1210d26961d456a77a39e1f0bb0"],
  ["DOGE", "BEP20", "0x161ba15a5f335c9f06bb5bbb0a9ce14076fbb645"],
  ["DOGE", "BEP20", "0x3c783c21a0383057d128bae431894a5c19f9cf06"],
  ["DOGE", "BEP20", "0x515b72ed8a97f42c568d6a143232775018f133c8"],
  ["DOGE", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["DOGE", "BEP20", "0x73f5ebe90f27b46ea12e5795d16c4b408b19cc6f"],
  ["DOGE", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["DOGE", "BEP20", "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8"],
  ["DOGE", "BEP20", "0xa180fe01b906a1be37be6c534a3300785b20d947"],
  ["DOGE", "BEP20", "0xbd612a3f30dca67bf60a39fd0d35e39b7ab80774"],
  ["DOGE", "BEP20", "0xdccf3b77da55107280bd850ea519df3705d1a75a"],
  ["DOGE", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["DOGE", "BEP20", "0xeb2d2f1b8c558a40207669291fda468e50c8a0bb"],
  ["DOGE", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["DOT", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["DOT", "BEP2", "bnb1lsmt5a8vqqus5fwslx8pyyemgjtg4y6ugj308t"],
  ["DOT", "BEP2", "bnb1u2agwjat20494fmc6jnuau0ls937cfjn4pjwtn"],
  ["DOT", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["DOT", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["DOT", "BEP20", "0xbd612a3f30dca67bf60a39fd0d35e39b7ab80774"],
  ["DOT", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["DOT", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["DOT", "DOT", "16ZL8yLyXv3V3L3z9ofR1ovFLziyXaN1DPq4yffMAZ9czzBD"],
  ["DOT", "DOT", "1743nDTMZisPgBCYSAgkUn1kVG7MePc9rvMEjoRNf4ipVkF"],
  ["DOT", "DOT", "1qnJN7FViy3HZaxZK9tGAA71zxHSBeUweirKqCaox4t8GT7"],
  ["DOT", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["DOT", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["DOT", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["DOT", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["ENJ", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["ENJ", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["ENJ", "ETH", "0x56eddb7aa87536c09ccc2793473599fd21a8b17f"],
  ["ENJ", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["ENJ", "ETH", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"],
  ["ENJ", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["ENJ", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["ETH", "ARB", "0xb38e8c17e38363af6ebdcb3dae12e0243582891d"],
  ["ETH", "ARB", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["ETH", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["ETH", "BEP2", "bnb1lsmt5a8vqqus5fwslx8pyyemgjtg4y6ugj308t"],
  ["ETH", "BEP2", "bnb1m5amny2gs3xdyta6pksmr43zu4727w24syyks7"],
  ["ETH", "BEP2", "bnb1xrfwzlu9c5208lhtn7ywt0mjrhjh4nt4fjyqxy"],
  ["ETH", "BEP20", "0x01c952174c24e1210d26961d456a77a39e1f0bb0"],
  ["ETH", "BEP20", "0x161ba15a5f335c9f06bb5bbb0a9ce14076fbb645"],
  ["ETH", "BEP20", "0x1fbe2acee135d991592f167ac371f3dd893a508b"],
  ["ETH", "BEP20", "0x29bdfbf7d27462a2d115748ace2bd71a2646946c"],
  ["ETH", "BEP20", "0x3c783c21a0383057d128bae431894a5c19f9cf06"],
  ["ETH", "BEP20", "0x515b72ed8a97f42c568d6a143232775018f133c8"],
  ["ETH", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["ETH", "BEP20", "0x73f5ebe90f27b46ea12e5795d16c4b408b19cc6f"],
  ["ETH", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["ETH", "BEP20", "0x9696f59e4d72e237be84ffd425dcad154bf96976"],
  ["ETH", "BEP20", "0xa180fe01b906a1be37be6c534a3300785b20d947"],
  ["ETH", "BEP20", "0xbd612a3f30dca67bf60a39fd0d35e39b7ab80774"],
  ["ETH", "BEP20", "0xdccf3b77da55107280bd850ea519df3705d1a75a"],
  ["ETH", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["ETH", "BEP20", "0xeb2d2f1b8c558a40207669291fda468e50c8a0bb"],
  ["ETH", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["ETH", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["ETH", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["ETH", "ETH", "0x4976a4a02f38326660d17bf34b431dc6e2eb2327"],
  ["ETH", "ETH", "0x56eddb7aa87536c09ccc2793473599fd21a8b17f"],
  ["ETH", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["ETH", "ETH", "0x9696f59e4d72e237be84ffd425dcad154bf96976"],
  ["ETH", "ETH", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"],
  ["ETH", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["ETH", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["ETH", "OP", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["ETH", "OP", "0xF977814e90dA44bFA03b6295A0616a897441aceC"],
  ["ETH", "OP", "0xacd03d601e5bb1b275bb94076ff46ed9d753435a"],
  ["FDUSD", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["FDUSD", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["FDUSD", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["FDUSD", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["FDUSD", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["FDUSD", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["GRT", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["GRT", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["GRT", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["GRT", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["GRT", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["HFT", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["HFT", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["HFT", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["HFT", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["HFT", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["HFT", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["HFT", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["HFT", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["LINK", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["LINK", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["LINK", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["LINK", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["LINK", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["LINK", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["LINK", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["LINK", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["LINK", "ETH", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"],
  ["LINK", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["LINK", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["LTC", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["LTC", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["LTC", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["LTC", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["LTC", "LTC", "LZEjckteAtWrugbsy9zU8VHEZ4iUiXo9Nm"],
  ["LTC", "LTC", "LbmGksLBwtwRXyxeazCZqKiAHX6cWN2AzN"],
  ["LTC", "LTC", "LhzEoDXHXASi4hSMxrKeVoSGrED9QsBpPq"],
  ["LTC", "LTC", "M8T1B2Z97gVdvmfkQcAtYbEepune1tzGua"],
  ["LTC", "LTC", "MB8nnFMvR5cgvpzQ1QXTDVfUM91BcsLH3k"],
  ["LTC", "LTC", "MBjKmoDwkuUbtnVd4vjymxjJx7Crca2s1z"],
  ["LTC", "LTC", "MDwD5wYdeuoisfoaWKgeHK4Gq3YkbaCypJ"],
  ["LTC", "LTC", "MEhAHYijouCinmGKL6n1bRTXYznH1X24rD"],
  ["LTC", "LTC", "MJto5wFLrE9t4TDXCgdSet8W6mxYqGijC3"],
  ["LTC", "LTC", "MJwFHGandYUFJTTHHSXg3q6u7ge4af1n4N"],
  ["LTC", "LTC", "MLkNzCps6cXou2DELVfxDuRC4uZGwr397o"],
  ["LTC", "LTC", "MQd1fJwqBJvwLuyhr17PhEFx1swiqDbPQS"],
  ["LTC", "LTC", "MSeDRiNoH5Afr9b9rNo837hYzpxBXXqMZf"],
  ["LTC", "LTC", "MWGTiJBNEQSfxTCrdC2VKEa55Lck27wr67"],
  ["LTC", "LTC", "MWkX1ZaFbrRPtcQvVpjvigxWU17JoinePy"],
  ["MASK", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["MASK", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["MASK", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["MASK", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["MASK", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["MASK", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["MASK", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["MASK", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["MASK", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["MATIC", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["MATIC", "BEP2", "bnb1xrfwzlu9c5208lhtn7ywt0mjrhjh4nt4fjyqxy"],
  ["MATIC", "BEP20", "0x29bdfbf7d27462a2d115748ace2bd71a2646946c"],
  ["MATIC", "BEP20", "0x3c783c21a0383057d128bae431894a5c19f9cf06"],
  ["MATIC", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["MATIC", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["MATIC", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["MATIC", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["MATIC", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["MATIC", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["MATIC", "ETH", "0x4976a4a02f38326660d17bf34b431dc6e2eb2327"],
  ["MATIC", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["MATIC", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["MATIC", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["MATIC", "MATIC", "0x082489a616ab4d46d1947ee3f912e080815b08da"],
  ["MATIC", "MATIC", "0x5a52E96BAcdaBb82fd05763E25335261B270Efcb"],
  ["MATIC", "MATIC", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["MATIC", "MATIC", "0xe7804c37c13166ff0b37f5ae0bb07a3aebb6e245"],
  ["MATIC", "MATIC", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["OP", "OP", "0xF977814e90dA44bFA03b6295A0616a897441aceC"],
  ["OP", "OP", "0xacd03d601e5bb1b275bb94076ff46ed9d753435a"],
  ["SHIB", "BEP20", "0x161ba15a5f335c9f06bb5bbb0a9ce14076fbb645"],
  ["SHIB", "BEP20", "0x1fbe2acee135d991592f167ac371f3dd893a508b"],
  ["SHIB", "BEP20", "0x3c783c21a0383057d128bae431894a5c19f9cf06"],
  ["SHIB", "BEP20", "0x515b72ed8a97f42c568d6a143232775018f133c8"],
  ["SHIB", "BEP20", "0x73f5ebe90f27b46ea12e5795d16c4b408b19cc6f"],
  ["SHIB", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["SHIB", "BEP20", "0xa180fe01b906a1be37be6c534a3300785b20d947"],
  ["SHIB", "BEP20", "0xbd612a3f30dca67bf60a39fd0d35e39b7ab80774"],
  ["SHIB", "BEP20", "0xdccf3b77da55107280bd850ea519df3705d1a75a"],
  ["SHIB", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["SHIB", "BEP20", "0xeb2d2f1b8c558a40207669291fda468e50c8a0bb"],
  ["SHIB", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["SHIB", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["SHIB", "ETH", "0x4976a4a02f38326660d17bf34b431dc6e2eb2327"],
  ["SHIB", "ETH", "0x56eddb7aa87536c09ccc2793473599fd21a8b17f"],
  ["SHIB", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["SHIB", "ETH", "0x9696f59e4d72e237be84ffd425dcad154bf96976"],
  ["SHIB", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["SHIB", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["SOL", "BEP20", "0x01c952174c24e1210d26961d456a77a39e1f0bb0"],
  ["SOL", "BEP20", "0x1fbe2acee135d991592f167ac371f3dd893a508b"],
  ["SOL", "BEP20", "0x3c783c21a0383057d128bae431894a5c19f9cf06"],
  ["SOL", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["SOL", "BEP20", "0xdccf3b77da55107280bd850ea519df3705d1a75a"],
  ["SOL", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["SOL", "BEP20", "0xeb2d2f1b8c558a40207669291fda468e50c8a0bb"],
  ["SOL", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["SOL", "SOL", "2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S"],
  ["SOL", "SOL", "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E"],
  ["SOL", "SOL", "5tzFkiKscXHK5ZXCGbXZxdw7gTjjD1mBwuoFbhUvuAi9"],
  ["SOL", "SOL", "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"],
  ["SSV", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["SSV", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["SSV", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["SSV", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["SSV", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["TUSD", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["TUSD", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["TUSD", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["TUSD", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["TUSD", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["TUSD", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["TUSD", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["TUSD", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["TUSD", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["TUSD", "TRX", "TJCo98saj6WND61g1uuKwJ9GMWMT9WkJFo"],
  ["TUSD", "TRX", "TNXoiAJ3dct8Fjg4M9fkLFh9S2v9TXc32G"],
  ["TUSD", "TRX", "TV6MuMXfmLbBqPZvBHdwFsDnQeVfnmiuSi"],
  ["TUSD", "TRX", "TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],
  ["UNI", "BEP2", "bnb142q467df6jun6rt5u2ar58sp47hm5f9wvz2cvg"],
  ["UNI", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["UNI", "BEP2", "bnb1lsmt5a8vqqus5fwslx8pyyemgjtg4y6ugj308t"],
  ["UNI", "BEP2", "bnb1u2agwjat20494fmc6jnuau0ls937cfjn4pjwtn"],
  ["UNI", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["UNI", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["UNI", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["UNI", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["UNI", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["UNI", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["UNI", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["UNI", "ETH", "0x9696f59e4d72e237be84ffd425dcad154bf96976"],
  ["UNI", "ETH", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"],
  ["UNI", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["UNI", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["USDC", "ALGO", "MTCEM5YJJSYGW2RCXYXGE4SXLSPUUEJKQAWG2GUX6CNN72KQ3XPJCM6NOI"],
  ["USDC", "ALGO", "QYXDGS2XJJT7QNR6EJ2YHNZFONU6ROFM6BKTBNVT63ZXQ5OC6IYSPNDJ4U"],
  ["USDC", "ARB", "0xb38e8c17e38363af6ebdcb3dae12e0243582891d"],
  ["USDC", "AVAX", "0x4aefa39caeadd662ae31ab0ce7c8c2c9c0a013e8"],
  ["USDC", "AVAX", "0x9f8c163cba728e99993abe7495f06c0a3c8ac8b9"],
  ["USDC", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["USDC", "BEP20", "0x1fbe2acee135d991592f167ac371f3dd893a508b"],
  ["USDC", "BEP20", "0x29bdfbf7d27462a2d115748ace2bd71a2646946c"],
  ["USDC", "BEP20", "0x3c783c21a0383057d128bae431894a5c19f9cf06"],
  ["USDC", "BEP20", "0x515b72ed8a97f42c568d6a143232775018f133c8"],
  ["USDC", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["USDC", "BEP20", "0x73f5ebe90f27b46ea12e5795d16c4b408b19cc6f"],
  ["USDC", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["USDC", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["USDC", "BEP20", "0xeb2d2f1b8c558a40207669291fda468e50c8a0bb"],
  ["USDC", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["USDC", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["USDC", "ETH", "0x4976a4a02f38326660d17bf34b431dc6e2eb2327"],
  ["USDC", "ETH", "0x56eddb7aa87536c09ccc2793473599fd21a8b17f"],
  ["USDC", "ETH", "0x9696f59e4d72e237be84ffd425dcad154bf96976"],
  ["USDC", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["USDC", "MATIC", "0x082489a616ab4d46d1947ee3f912e080815b08da"],
  ["USDC", "MATIC", "0x5a52E96BAcdaBb82fd05763E25335261B270Efcb"],
  ["USDC", "MATIC", "0xe7804c37c13166ff0b37f5ae0bb07a3aebb6e245"],
  ["USDC", "MATIC", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["USDC", "RON", "0x030e37ddd7df1b43db172b23916d523f1599c6cb"],
  ["USDC", "RON", "0xb32e9a84ae0b55b8ab715e4ac793a61b277bafa3"],
  ["USDC", "SOL", "2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S"],
  ["USDC", "SOL", "5tzFkiKscXHK5ZXCGbXZxdw7gTjjD1mBwuoFbhUvuAi9"],
  ["USDC", "SOL", "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"],
  ["USDC", "TRX", "TJDENsfBJs4RFETt1X1W8wMDc8M5XnJhCe"],
  ["USDC", "TRX", "TNXoiAJ3dct8Fjg4M9fkLFh9S2v9TXc32G"],
  ["USDC", "TRX", "TV6MuMXfmLbBqPZvBHdwFsDnQeVfnmiuSi"],
  ["USDC", "TRX", "TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],
  ["USDT", "ARB", "0xb38e8c17e38363af6ebdcb3dae12e0243582891d"],
  ["USDT", "AVAX", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["USDT", "AVAX", "0x4aefa39caeadd662ae31ab0ce7c8c2c9c0a013e8"],
  ["USDT", "AVAX", "0x9f8c163cba728e99993abe7495f06c0a3c8ac8b9"],
  ["USDT", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["USDT", "BEP2", "bnb1lsmt5a8vqqus5fwslx8pyyemgjtg4y6ugj308t"],
  ["USDT", "BEP2", "bnb1m5amny2gs3xdyta6pksmr43zu4727w24syyks7"],
  ["USDT", "BEP2", "bnb1xrfwzlu9c5208lhtn7ywt0mjrhjh4nt4fjyqxy"],
  ["USDT", "BEP20", "0x01c952174c24e1210d26961d456a77a39e1f0bb0"],
  ["USDT", "BEP20", "0x161ba15a5f335c9f06bb5bbb0a9ce14076fbb645"],
  ["USDT", "BEP20", "0x1fbe2acee135d991592f167ac371f3dd893a508b"],
  ["USDT", "BEP20", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["USDT", "BEP20", "0x29bdfbf7d27462a2d115748ace2bd71a2646946c"],
  ["USDT", "BEP20", "0x3c783c21a0383057d128bae431894a5c19f9cf06"],
  ["USDT", "BEP20", "0x515b72ed8a97f42c568d6a143232775018f133c8"],
  ["USDT", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["USDT", "BEP20", "0x73f5ebe90f27b46ea12e5795d16c4b408b19cc6f"],
  ["USDT", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["USDT", "BEP20", "0x9696f59e4d72e237be84ffd425dcad154bf96976"],
  ["USDT", "BEP20", "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8"],
  ["USDT", "BEP20", "0xa180fe01b906a1be37be6c534a3300785b20d947"],
  ["USDT", "BEP20", "0xbd612a3f30dca67bf60a39fd0d35e39b7ab80774"],
  ["USDT", "BEP20", "0xdccf3b77da55107280bd850ea519df3705d1a75a"],
  ["USDT", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["USDT", "BEP20", "0xeb2d2f1b8c558a40207669291fda468e50c8a0bb"],
  ["USDT", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["USDT", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["USDT", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["USDT", "ETH", "0x4976a4a02f38326660d17bf34b431dc6e2eb2327"],
  ["USDT", "ETH", "0x56eddb7aa87536c09ccc2793473599fd21a8b17f"],
  ["USDT", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["USDT", "ETH", "0x9696f59e4d72e237be84ffd425dcad154bf96976"],
  ["USDT", "ETH", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"],
  ["USDT", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["USDT", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["USDT", "MATIC", "0x082489a616ab4d46d1947ee3f912e080815b08da"],
  ["USDT", "MATIC", "0x5a52E96BAcdaBb82fd05763E25335261B270Efcb"],
  ["USDT", "MATIC", "0xe7804c37c13166ff0b37f5ae0bb07a3aebb6e245"],
  ["USDT", "MATIC", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["USDT", "OP", "0xF977814e90dA44bFA03b6295A0616a897441aceC"],
  ["USDT", "OP", "0xacd03d601e5bb1b275bb94076ff46ed9d753435a"],
  ["USDT", "SOL", "2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S"],
  ["USDT", "SOL", "5tzFkiKscXHK5ZXCGbXZxdw7gTjjD1mBwuoFbhUvuAi9"],
  ["USDT", "SOL", "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"],
  ["USDT", "TRX", "TAzsQ9Gx8eqFNFSKbeXrbi45CuVPHzA8wr"],
  ["USDT", "TRX", "TJCo98saj6WND61g1uuKwJ9GMWMT9WkJFo"],
  ["USDT", "TRX", "TJDENsfBJs4RFETt1X1W8wMDc8M5XnJhCe"],
  ["USDT", "TRX", "TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9"],
  ["USDT", "TRX", "TNXoiAJ3dct8Fjg4M9fkLFh9S2v9TXc32G"],
  ["USDT", "TRX", "TQrY8tryqsYVCYS3MFbtffiPp2ccyn4STm"],
  ["USDT", "TRX", "TV6MuMXfmLbBqPZvBHdwFsDnQeVfnmiuSi"],
  ["USDT", "TRX", "TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],
  ["USDT", "TRX", "TYASr5UV6HEcXatwdFQfmLVUqQQQMUxHLS"],
  ["WRX", "BEP2", "bnb142q467df6jun6rt5u2ar58sp47hm5f9wvz2cvg"],
  ["WRX", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["WRX", "BEP2", "bnb1lsmt5a8vqqus5fwslx8pyyemgjtg4y6ugj308t"],
  ["WRX", "BEP2", "bnb1u2agwjat20494fmc6jnuau0ls937cfjn4pjwtn"],
  ["WRX", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["WRX", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["WRX", "BEP20", "0xeb2d2f1b8c558a40207669291fda468e50c8a0bb"],
  ["WRX", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["WRX", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["WRX", "ETH", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"],
  ["WRX", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["WRX", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["XRP", "BEP2", "bnb1fnd0k5l4p3ck2j9x9dp36chk059w977pszdgdz"],
  ["XRP", "BEP2", "bnb1lsmt5a8vqqus5fwslx8pyyemgjtg4y6ugj308t"],
  ["XRP", "BEP2", "bnb1u2agwjat20494fmc6jnuau0ls937cfjn4pjwtn"],
  ["XRP", "BEP20", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["XRP", "BEP20", "0x8894e0a0c962cb723c1976a4421c95949be2d4e3"],
  ["XRP", "BEP20", "0xbd612a3f30dca67bf60a39fd0d35e39b7ab80774"],
  ["XRP", "BEP20", "0xe2fc31f816a9b94326492132018c3aecc4a93ae1"],
  ["XRP", "BEP20", "0xeb2d2f1b8c558a40207669291fda468e50c8a0bb"],
  ["XRP", "BEP20", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["XRP", "ETH", "0x21a31ee1afc51d94c2efccaa2092ad1028285549"],
  ["XRP", "ETH", "0x28c6c06298d514db089934071355e5743bf21d60"],
  ["XRP", "ETH", "0x5a52e96bacdabb82fd05763e25335261b270efcb"],
  ["XRP", "ETH", "0xdfd5293d8e347dfe59e90efd55b2956a1343963d"],
  ["XRP", "ETH", "0xf977814e90da44bfa03b6295a0616a897441acec"],
  ["XRP", "XRP", "rBtttd61FExHC68vsZ8dqmS3DfjFEceA1A"],
  ["XRP", "XRP", "rDAE53VfMvftPB4ogpWGWvzkQxfht6JPxr"],
  ["XRP", "XRP", "rEy8TFcrAPvhpKrwyrscNYyqBGUkE9hKaJ"],
  ["XRP", "XRP", "rNU4eAowPuixS5ZCWaRL72UUeKgxcKExpK"],
  ["XRP", "XRP", "rs8ZPbYqgecRcDzQpJYAMhSxSi5htsjnza"],
]

function getAddresses(chain) {
  return assetList.filter(i => i[1] === chain).map(i => i[2])
}
function getOwners(chain) {
  const isCaseSensitive = ['BTC', 'TRX', 'SOL', 'XRP', 'LTC', 'DOT', 'ALGO'].includes(chain)
  return getUniqueAddresses(assetList.filter(i => i[1] === chain).map(i => i[2]), isCaseSensitive)
}

module.exports = {
  bitcoin: {
    owners: getAddresses('BTC'),
  },
  ethereum: {
    owners: getOwners('ETH'),
    blacklistedTokens: [
      '0x9be89d2a4cd102d8fecc6bf9da793be995c22541', // BBTC
      ADDRESSES.ethereum.BNB, // WBNB
    ]
  },
  bsc: {
    owners: getOwners('BEP20'),
    tokens: [ADDRESSES.null,],
  },
  bep2: {
    geckoId: 'binancecoin',
    owners: getAddresses('BEP2'),
  },
  tron: {
    owners: getOwners('TRX'),
  },
  avax: {
    owners: getOwners('AVAX'),
  },
  arbitrum: {
    owners: getOwners('ARB'),
  },
  litecoin: {
    owners: getOwners('LTC')
  },
  polygon: {
    owners: getOwners('MATIC')
  },
  optimism: {
    owners: getOwners('OP')
  },
  ripple: {
    owners: getOwners('XRP')
  },
  solana: {
    owners: getOwners('SOL')
  },
  polkadot: {
    owners: getOwners('DOT')
  },
  algorand: {
    owners: getOwners('ALGO')
  },
  aptos: {
    owners: getOwners('APT')
  }
}