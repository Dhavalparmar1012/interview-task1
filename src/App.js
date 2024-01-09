// import logo from './logo.svg';
import './App.css';
import person from './Components/person.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const handleChoosePlan = (plan, price) => {
    console.log(`Selected plan: ${plan}, Price: ${price}`);
  };
  return (
    <>

    <h1 className='my-5 text-center'>Placing plan</h1>

    <div className="pricing">
      <div className="plan">
        <div className="title">
          <img src={person} alt="error" width={60} height={60} className='img-fluid bg-white rounded p-2' />
            <div>For individuals</div>
            <div className='fw-semibold fs-4'>Basic</div>
        </div>
        <div className="desc my-2 text-muted">Lorem ipsum dolor consectetur adipiscing <br /> elit,sed do eiusmod tempor</div>
        <div className="price"><b>$99</b><span className='text-muted fs-5'><small>/monthly</small></span></div>
        <div className="question fs-2 fw-normal">What's included</div>
        <ul className="features list-unstyled">
          <li className='text-muted'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'blue' }} /> Lorem ipsum dolor amet, consectetur</li>
          <li className='text-muted'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'blue' }} /> Lorem ipsum amet, consectetur</li>
          <li className='text-muted'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'blue' }} /> Lorem ipsum dolor amet, consectetur</li>
          <li className='text-muted'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'blue' }} /> Lorem ipsum amet, consectetur</li>
        </ul>
        <div className="d-grid gap-2 pt-5">
          <button className="btn btn-primary fw-semibold" type="button" onClick={() => handleChoosePlan('Basic', 99)}>Choose Plan</button>
        </div>
      </div>

      <div className="plan popular bg-primary ">
        <div className="title">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1024px-Home-icon.svg.png" alt="error" width={60} height={60} className='img-fluid bg-white rounded p-2' />
            <div className='text-white'>For startups</div>
            <div className='text-white fw-semibold fs-4'>Pro</div>
        </div>
        <div className="desc my-2 text-white">Lorem ipsum dolor consectetur adipiscing <br /> elit,sed do eiusmod tempor</div>
        <div className="price text-white"><b>$199</b><span className='fs-5'><small> /monthly</small></span></div>
        <div className="question fs-2 fw-normal text-white">What's included</div>
        <ul className="features list-unstyled">
          <li className='text-white'><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor amet, consectetur</li>
          <li className='text-white'><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum amet, consectetur</li>
          <li className='text-white'><FontAwesomeIcon icon={faCheckCircle} /> Neque porro quisquam est, qui dolorem</li>
          <li className='text-white'><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor amet, consectetur</li>
          <li className='text-white'><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum amet, consectetur</li>
          <li className='text-white'><FontAwesomeIcon icon={faCheckCircle} /> Sed ut perspiciatis unde</li>
          <li className='text-white'><FontAwesomeIcon icon={faCheckCircle} /> Neque porro quisquam est, qui dolorem</li>
        </ul>
        <div className="d-grid gap-2 py-4">
          <button className="btn text-white fw-semibold" style={{ backgroundColor: '#00BFFF'}} type="button" onClick={() => handleChoosePlan('Pro', 199)}>Choose plan</button>
        </div>
      </div>

      <div className="plan">
        <div className="title">
          <img src="https://static.thenounproject.com/png/2285851-200.png" alt="error" width={60} height={60} className='img-fluid bg-white rounded p-2' />
            <div>For big companies</div>
            <div className='fw-semibold fs-4'>Enterprise</div>
        </div>
        <div className="desc my-2 text-muted">Lorem ipsum dolor consectetur adipiscing <br /> elit,sed do eiusmod tempor</div>
        <div className="price"><b>$399</b><span className='text-muted fs-5'><small> /monthly</small></span></div>
        <div className="question fs-2 fw-normal">What's included</div>
        <ul className="features list-unstyled">
          <li className='text-muted'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'blue' }} /> Lorem ipsum dolor amet, consectetur</li>
          <li className='text-muted'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'blue' }} /> Lorem ipsum amet, consectetur</li>
          <li className='text-muted'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'blue' }} /> Lorem ipsum dolor amet, consectetur</li>
          <li className='text-muted'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'blue' }} /> Lorem ipsum amet, consectetur</li>
        </ul>
        <div className="d-grid gap-2 pt-5">
          <button className="btn btn-primary fw-semibold" type="button" onClick={() => handleChoosePlan('Enterprise', 399)}>Choose Plan</button>
        </div>
      </div>

    </div>
    <div className='float-start mx-4 arrow p-2 rounded-circle w-5 h-auto'>
    <FontAwesomeIcon icon={faArrowUp} />
    </div>
    </>
  );
}

export default App;
