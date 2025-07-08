import curses
import random

BOARD_HEIGHT = 20
BOARD_WIDTH = 60


def create_food(snake):
    while True:
        food = [random.randint(1, BOARD_HEIGHT - 2),
                random.randint(1, BOARD_WIDTH - 2)]
        if food not in snake:
            return food


def main(stdscr):
    curses.curs_set(0)
    win = curses.newwin(BOARD_HEIGHT, BOARD_WIDTH, 0, 0)
    win.keypad(True)
    win.timeout(100)

    snake = [[BOARD_HEIGHT // 2, BOARD_WIDTH // 2 + 1],
             [BOARD_HEIGHT // 2, BOARD_WIDTH // 2],
             [BOARD_HEIGHT // 2, BOARD_WIDTH // 2 - 1]]
    food = create_food(snake)

    win.border()
    win.addch(food[0], food[1], '*')
    key = curses.KEY_RIGHT

    while True:
        next_key = win.getch()
        if next_key in [curses.KEY_UP, curses.KEY_DOWN, curses.KEY_LEFT, curses.KEY_RIGHT]:
            key = next_key

        head_y, head_x = snake[0]
        if key == curses.KEY_UP:
            head_y -= 1
        elif key == curses.KEY_DOWN:
            head_y += 1
        elif key == curses.KEY_LEFT:
            head_x -= 1
        elif key == curses.KEY_RIGHT:
            head_x += 1

        new_head = [head_y, head_x]

        if (head_y == 0 or head_y == BOARD_HEIGHT - 1 or
                head_x == 0 or head_x == BOARD_WIDTH - 1 or
                new_head in snake):
            msg = "Game Over!"
            win.addstr(BOARD_HEIGHT // 2, (BOARD_WIDTH - len(msg)) // 2, msg)
            win.refresh()
            win.getch()
            break

        snake.insert(0, new_head)
        if new_head == food:
            food = create_food(snake)
            win.addch(food[0], food[1], '*')
        else:
            tail = snake.pop()
            win.addch(tail[0], tail[1], ' ')

        win.addch(new_head[0], new_head[1], '#')


def run():
    curses.wrapper(main)


if __name__ == "__main__":
    run()
