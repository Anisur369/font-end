import Parent from './../../../../assets/parent.svg';
import Tutor from './../../../../assets/tutor.svg';

function ItemField() {
  return (
    <>
      <div className="flex justify-content-between gap-4  w-[100%]">

        <div className="col-12 col-lg-5 mb-5 mt-md-4 mt-lg-0 px-0">
          <div className="mt-5">
            <div className="row row-cols-2">
              <div className="mb-3">
                <div className="bg-white rounded-3 shadow-lg px-2  px-md-4 pb-1 pt-3 position-relative "> 
                  {/* s="cursor: pointer; border-style: solid; border-width: 3px; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(134, 194, 64);" */}
                  <div className="text-center">
                      {/* s="margin-top: -50px;" */}
                    <span className="d-block">
                        {/* s="position: absolute; top: -35px; left: 57%; z-index: 10;" */}
                        {/* svg img silo */}
                    </span>
                    <img className="rounded-circle shadow-lg bg-white border-primary  border-3" src={Parent} alt="parent" height="60" width="60" />
                      {/* style="filter: drop-shadow(rgba(0, 0, 0, 0.25) 2px 4px 7px); z-index: 1;" */}
                  </div>
                  <p className="fw-semibold  mb-0 text-center mt-1 one-line">
                      {/* style="font-size: 15px;" */}
                    Parents Or Student
                  </p>
                  <p className="fw-light text-center">
                      {/* style="font-size: 11px;" */}
                    Are you looking for a tutor? Tap it!!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-3 shadow-lg px-2 pb-1 pt-3 position-relative ">
              {/* style="cursor: pointer; border-style: solid; border-width: 3px; border-color: rgb(255, 255, 255);" */}
            <div className="text-center">
                {/* style="margin-top: -50px;" */}
              <span className="d-none">
                  {/* style="position: absolute; top: -35px; left: 57%; z-index: 10;" */}
                {/* svg image silo */}
              </span>
              <img className="rounded-circle shadow-lg bg-white  border-3" src={Tutor} alt="img" height="60" width="60" />
                {/* style="filter: drop-shadow(rgba(0, 0, 0, 0.25) 2px 4px 7px); z-index: 1;" */}
            </div>
            <p className="fw-semibold  mb-0 text-center mt-1">Tutor</p> 
            {/* style="font-size: 15px;" */}
            <p className="fw-light text-center">Are you looking for a tuition jobs? Tap it!!!</p>
            {/* style="font-size: 11px;" */}
          </div>
        </div>
        
      </div>            
    </>
  );
}

export default ItemField;