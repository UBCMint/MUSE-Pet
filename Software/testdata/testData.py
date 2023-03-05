#!python

import sys

sys.path
sys.executable
import time
import random
import requests


if __name__ == "__main__":
    try:
        # The following loop acquires data, computes band powers, and calculates neurofeedback metrics based on those band powers
        while True:
            alpha = random.randint(0, 100)
            beta = random.randint(0, 100)

            focus_level = beta/alpha
            if (focus_level < 1):
                print('Level 1: ' + str(focus_level))
            elif(focus_level < 2):
                print('Level 2: ' + str(focus_level))
            elif(focus_level < 3):
                print('Level 3: ' + str(focus_level))
            elif(focus_level < 4):
                print('Level 4: ' + str(focus_level))
            else:
                print('Congrats you are Level 5 focused: ' + str(focus_level))
            
            requests.post('http://localhost:9000/brainData', json={"focusLevel": focus_level, "alpha": alpha, "beta": beta})
            time.sleep(1500)


    except KeyboardInterrupt:
        print('Closing!')
