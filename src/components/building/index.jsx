import PropTypes from 'prop-types';

function index({image, text}) {
  return (
    <div className="bg-white w-[70%] md:w-[330px] lg:w-[230px] xl:w-[270px] px-3 py-5">
        <div className="m-auto">
            <div style={{background: `url(${image}) no-repeat center/cover`, backgroundPosition: "50% 50%"}} className="h-[165px] w-[165px] rounded-full m-auto mb-5"></div>
            <h4 className="font-semibold italic text-2xl">{text}</h4>
        </div>
    </div>
  )
}

index.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string,
  }

export default index