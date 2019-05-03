# -*- coding:utf-8 -*-
import re
from pathlib import Path

_in_file = 'script.js'
_out_file = 'packJs/script_pk.js'
_CRLF = '\n'

_CMT_LINE = re.compile(r'\/\*.*\*\/')
_CMT_START = re.compile(r'\/\*')
_CMT_END = re.compile(r'\*\/')
_CMT_DBL_SL1 = re.compile(r'\/\/')
_CMT_DBL_SL2 = re.compile(r".*'.*\/\/.*'")

def checkBlockCommentLint(dt):
    r = re.search(_CMT_LINE, dt)
    if not r:
        return None
    ls = dt[:r.start()].rstrip()
    rs = dt[r.end():].lstrip()
    return ls + rs

def checkBlockCommentStart(dt):
    r = re.search(_CMT_START, dt)
    if not r:
        return None
    return dt[:r.start()].rstrip()

def checkBlockCommentEnd(dt):
    r = re.search(_CMT_END, dt)
    if not r:
        return None
    return dt[r.end():].lstrip()

def checkDoubleSlashComment(dt):
    r = re.search(_CMT_DBL_SL1, dt)
    if not r:
        return None
    nr = re.search(_CMT_DBL_SL2, dt)
    if nr:
        return None
    return dt[:r.start()].rstrip()


ip = Path(_in_file)
op = Path(_out_file)

#crlf = _CRLF
crlf = ''

n = 0
in_comment = False
with op.open(mode='w', encoding='utf-8') as ofl:
    with ip.open(encoding='utf-8') as ifl:
        while True:
            ln = ifl.readline()
            if not ln:
                break
            n += 1
            #if n > 1400:
            #    crlf = _CRLF
            #    break
            #ln = ln.rstrip()
            ln = ln.strip()

            r = checkBlockCommentLint(ln)
            if r is not None:
                if len(r) > 0:
                    print(r)
                    ofl.write(r + crlf)
                continue

            r = checkBlockCommentStart(ln)
            if r is not None:
                in_comment = True
                if len(r) > 0:
                    print(r)
                    ofl.write(r + crlf)
                continue

            r = checkBlockCommentEnd(ln)
            if r is not None:
                in_comment = False
                if len(r) > 0:
                    print(r)
                    ofl.write(r + crlf)
                continue

            if in_comment:
                continue

            r = checkDoubleSlashComment(ln)
            if r is not None:
                if len(r) > 0:
                    print(r)
                    ofl.write(r + crlf)
                continue

            if len(ln) > 0:
                print(ln)
                ofl.write(ln + crlf)
#[EOF]