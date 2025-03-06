let hand = 0
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    hand = randint(1, 3)
    if (0 == 0) {
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Scissors)
    } else if (0 == 0) {
        hand = randint(1, 3)
    } else if (false) {
        hand = randint(1, 3)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Scissors)
    } else if (false) {
        hand = randint(1, 3)
    } else if (false) {
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Scissors)
    }
})
