import './error.styles.css'
import { useNavigate } from 'react-router-dom'
interface IErrorPropps {
  error: string 
}
export const Error: React.FunctionComponent<IErrorPropps> = ({error}:IErrorPropps) => {
  const navigate = useNavigate();
const closeError = () => {
  navigate(-1)
}
  return (      
    <div className="error_container">
      <div className="error_content">
        <h2 >OOps! some error happend</h2>
        <p className='error_text'>{error}</p>
      </div>
    <button type='button' className='error_button' onClick={closeError}>Закрыть</button>
  </div>);
}