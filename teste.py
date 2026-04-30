import socket
import requests
import socket
from concurrent.futures import ThreadPoolExecutor

def check_port(host, port):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(1.0)
    try:
        result = s.connect_ex((host, port))
        if result == 0:
            print(f"Porta {port}: ABERTA")
        s.close()
    except Exception:
        pass

def fast_scan(host, start_port, end_port):
    print(f"Iniciando scan rápido em: {host}")
    with ThreadPoolExecutor(max_workers=100) as executor:
        for port in range(start_port, end_port + 1):
            executor.submit(check_port, host, port)

import requests

url = "https://erp.sistemashugo.com.br/autenticar.php"
data = {
    "id": 1,
    "id_usu": 1
    }
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
}
cookies = {
    "PHPSESSID": "450613cb5a6bcec24c23472b47e1104a",
    "whostmgrsession": ":yp2HrmzrQQotaO5V,764fb01306025c2dda15ef8136b231c5",
    "timezone": "America/Argentina/Buenos_Aires"
}

try:
    response = requests.post(url, data=data, cookies=cookies, headers=headers)
    print(f"Status Code: {response.status_code}")
    print(response.text)
except Exception as e:
    print(f"Erro na conexão: {e}")