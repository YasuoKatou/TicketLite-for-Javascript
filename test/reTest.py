# -*- coding:utf-8 -*-
import re
import unittest

def rm_space(src):
    slist = re.findall(r'\s*[^a-zA-Z\s_]+\s*', src)
    for smb in slist:
        #print(smb)
        r = re.search(r'\s*(?P<symbol>[^a-zA-Z\s_]+)\s*', smb)
        #print(r.group('symbol'))
        src = src.replace(smb, str(r.group('symbol')))
    return src

class ReTest(unittest.TestCase):
    def test_01(self):
        '''
        正規表現で無くても置換が可能
        '''
        r = re.sub(r' = ', '=', 'a = b;')
        self.assertEqual('a=b;', r)

    def test_02(self):
        '''
        「test_01」を正規表現
        '''
        r = re.sub(r'\s=\s', '=', 'a = b;')
        self.assertEqual('a=b;', r)

    def test_03(self):
        '''
        Ａ．複数の空白文字にも対応（「test_01」と同じ置換）
        '''
        r = re.sub(r'\s*=\s*', '=', 'a = b;')
        self.assertEqual('a=b;', r)

    def test_03_non_space(self):
        '''
        Ａ．空白文字無しにも対応
        '''
        r = re.sub(r'\s*=\s*', '=', 'a=b;')
        self.assertEqual('a=b;', r)

    def test_03_tab_and_space(self):
        '''
        Ａ．tabにも対応
        '''
        r = re.sub(r'\s*=\s*', '=', 'a		=  b;')
        self.assertEqual('a=b;', r)

    def test_04(self):
        '''
        Ｂ．空白文字に隣接する記号を取得
        '''
        src = 'a = b + ( d /5 ) ;'
        src = rm_space(src)

        self.assertEqual('a=b+(d/5);', src)

    def test_04_Reserved_word01(self):
        src = 'function _test() {'
        src = rm_space(src)

        self.assertEqual('function _test(){', src)

    def test_04_Reserved_word02(self):
        src = 'class _test {'
        src = rm_space(src)
        self.assertEqual('class _test{', src)

if __name__ == '__main__':
    unittest.main()
#[EOF]