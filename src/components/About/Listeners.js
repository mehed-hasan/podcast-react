import speakerImg from '../../../src/components/images/banner/speakers.png';
import HeadingGroup from '../HadingGroup';


function Listeners() {
    return ( 

        <>
        <section id="listener_say">

            <HeadingGroup heading='What our listeners say' subheading='Their experience throughout every platform'/>

              <div className="gap_64"></div>
              <div className="img_wrapper text-center">
                <img className="img-fluid" src={speakerImg} alt=""/>
              </div>
          </section>

          <div className="gap_64"></div>
        </>
     );
}

export default Listeners;