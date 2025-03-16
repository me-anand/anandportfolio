const data = [
    {
        title: " hi",
        Date: "July 28, 2033",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim aliqu?id odio alias sed placeat odit aspernatur repellendus perferendis asperiores t odit aspernatur repellendusperferendis asperiores"

    },
    {
        title: " Lorem ipsum dolor, sit amet consectetur",
        Date: "Oct 20, 2033",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim aliqu?id odio alias sed placeat odit aspernatur repellendus perferendis asperiores t odit aspernatur repellendusperferendis asperiores"

    },

    {
        title: " Lorem ipsum dolor, sit amet consectetur",
        Date: "Oct 20, 2033",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim aliqu?id odio alias sed placeat odit aspernatur repellendus perferendis asperiores t odit aspernatur repellendusperferendis asperiores"

    },


]
const timelineContainer = document.getElementById('time');
const timeline = data.map((timeline, i) => {
    return(
    `

<div class="row content mt-3" key='${ i }'>
            <div class="col-lg-1">
                <div class="verticalline"></div>
                <div class="badgeelement mt-3 mb-3"></div>
                <div class="verticalline"></div>

            </div>
            <div class="col-lg-11">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5> ${timeline.title} </h5>
                            <h4>${timeline.Date}</h4>
                        </div>
                        <p>${timeline.desc}</p>


                    </div>
                </div>
            </div>
        </div>

    </div>
`
    )
});

timelineContainer.innerHTML = timeline;
