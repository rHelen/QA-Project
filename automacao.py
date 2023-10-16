import pyautogui
import time

pyautogui.press('win')
pyautogui.write(('edge'), interval=0.25)
pyautogui.press('enter')
time.sleep(1)

pyautogui.write('http://127.0.0.1:5500/cadastro.html', interval=0.10)
pyautogui.press('enter')
time.sleep(3)

pyautogui.moveTo(500, 285) # Move the mouse to the x, y coordinates 100, 150.
pyautogui.click()
pyautogui.write('user', interval=0.15)
pyautogui.press('tab')
pyautogui.write('1234', interval=0.15)
pyautogui.press('tab')
pyautogui.press('enter')





