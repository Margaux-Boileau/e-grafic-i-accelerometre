def moure_la_gota2():
    global x, y
    led.plot(x, y)
    basic.pause(50)
    basic.clear_screen()
    if input.acceleration(Dimension.X) <= 150 and x > 0:
        x = x - 1
    if input.acceleration(Dimension.X) > 150 and x < 4:
        x = x + 1
    if input.acceleration(Dimension.Y) <= 150 and y > 0:
        y = x - 1
    if input.acceleration(Dimension.Y) > 150 and y < 4:
        y = y + 1
def estacio_meteorologica():
    led.plot_bar_graph(0, 0)
y = 0
x = 0
x = 0
y = 0

def on_forever():
    moure_la_gota2()
    estacio_meteorologica()
basic.forever(on_forever)
