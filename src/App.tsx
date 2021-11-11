import './styles.css'
import IMAGE from './react.png'
import YENOT from './yenot.svg'

const App = () => {
    return (
        <div>
            <h1>
                If hometask {process.env.name} 
            </h1>
            <img src={IMAGE} alt="React logo" width="200" height="200"/>
            <img src={YENOT} alt="Yenot" width="300"/>
        </div>
    )
}

export default App
