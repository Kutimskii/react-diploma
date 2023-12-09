import './error.styles.css'
interface IErrorPropps {
  data: string,
  error: string
}
export const Error: React.FunctionComponent<IErrorPropps> = ({data,error}:IErrorPropps) => {
  return (      
    <div className="error_container">
      <div>
        <h2 className="error_content">{data}</h2>
          <p>
          {error}
          </p>
      </div>
    
  </div>);
}