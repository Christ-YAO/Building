import PropTypes from 'prop-types';

function index({color, title, description, icon}) {
  return (
    <div style={{backgroundColor:color}} className="p-5 text-center flex-grow sm:basis-1/2">
        <div className="bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center mb-3 m-auto">
            <icon className="text-4xl" />
            {icon}
        </div>
        <p className="uppercase text-3xl md:text-4xl font-light mb-4 px-2">{title}</p>
        <p className="italic text-[17px] md:text-lg mb-4">{description}</p>
        <button className="uppercase bg-white py-1 px-5 text-lg tracking-widest hover:brightness-[90%]">more</button>
    </div>
  )
}

index.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
}

export default index