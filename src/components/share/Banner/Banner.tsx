import "./Banner.styles.css"
import bannerImg from  '../../../img/banner.jpg'
export const Banner:React.FunctionComponent = ()=>{
  return (
  <div className="banner">
  <img src={bannerImg} className="img-fluid" alt="К весне готовы!"/>
  <h2 className="banner-header">К весне готовы!</h2>
</div>);
}