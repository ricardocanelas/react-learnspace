import React from 'react'
import useSlider from './hooks/useSlider'

// ---------------------------

const list = [
    { title: 'First', image: 'https://picsum.photos/600/300?grayscale&random=1' },
    { title: 'Second', image: 'https://picsum.photos/600/300?grayscale&random=2' },
    { title: 'Third', image: 'https://picsum.photos/600/300?grayscale&random=3' },
]

const ExampleSlider = () => {
    const { current, length, gotoNext, gotoPrevious, pause, play, isPause, isPlay } = useSlider(list, 5000)
    const item = current != null ? list[current] : false

    console.log('👋 HookUseSlider | Render ', `current: ${current}/${length}`)

    return (
        <div>
            <div>
                {item && (
                    <div className="item" style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="text current">{current}</div>
                        <div className="text title">{item.title}</div>
                        <div className="text image">{item.image}</div>
                    </div>
                )}

                <button onClick={gotoPrevious}>Previous</button>
                {' - '}
                <button onClick={pause} disabled={isPause}>
                    Pause
                </button>
                <button onClick={play} disabled={isPlay}>
                    Play
                </button>
                {' - '}
                <button onClick={gotoNext}>Next</button>
            </div>

            <pre>
                {`const {
    current, // ${current}
    length, // ${length}
    gotoNext, // fn
    gotoPrevious, // fn
    pause, // fn
    play, // fn
    isPause, // ${isPause}
    isPlay // ${isPlay}
} = useSlider(list, 5000);`}
            </pre>
        </div>
    )
}

export default ExampleSlider
