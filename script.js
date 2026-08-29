/* =====================================================
   KISAN PROCUREMENT PORTAL
   FRONTEND DEMO
===================================================== */


/* =====================================================
   PROCUREMENT CENTRES
===================================================== */

const procurementCentres = [

    {
        id: "CENTER-A",
        name: "Procurement Center A",
        villageArea: "North Zone",
        distance: "2.5 km",
        capacity: 100
    },

    {
        id: "CENTER-B",
        name: "Procurement Center B",
        villageArea: "Central Zone",
        distance: "4.2 km",
        capacity: 150
    },

    {
        id: "CENTER-C",
        name: "Procurement Center C",
        villageArea: "South Zone",
        distance: "6.8 km",
        capacity: 120
    }

];


/* =====================================================
   GOVERNMENT PROCUREMENT PRICES
   DEMO VALUES
===================================================== */

const governmentPrices = {

    Wheat: 2275,

    Rice: 2300,

    Maize: 2400,

    Mustard: 5950

};


/* =====================================================
   PROCUREMENT SLOTS
===================================================== */

let slots = [

    {
        id: 1,
        date: "2026-09-01",
        time: "09:00 AM - 11:00 AM",
        capacity: 20,
        booked: 8,
        crop: "Wheat"
    },

    {
        id: 2,
        date: "2026-09-01",
        time: "11:00 AM - 01:00 PM",
        capacity: 20,
        booked: 15,
        crop: "Rice"
    },

    {
        id: 3,
        date: "2026-09-01",
        time: "02:00 PM - 04:00 PM",
        capacity: 20,
        booked: 5,
        crop: "Maize"
    },

    {
        id: 4,
        date: "2026-09-02",
        time: "09:00 AM - 11:00 AM",
        capacity: 20,
        booked: 10,
        crop: "Wheat"
    },

    {
        id: 5,
        date: "2026-09-02",
        time: "11:00 AM - 01:00 PM",
        capacity: 20,
        booked: 3,
        crop: "Rice"
    },

    {
        id: 6,
        date: "2026-09-03",
        time: "09:00 AM - 11:00 AM",
        capacity: 20,
        booked: 12,
        crop: "Mustard"
    },

    {
        id: 7,
        date: "2026-09-03",
        time: "02:00 PM - 04:00 PM",
        capacity: 20,
        booked: 6,
        crop: "Wheat"
    }

];


/* =====================================================
   LOCAL STORAGE
===================================================== */

let bookings =
    JSON.parse(
        localStorage.getItem("kisanBookings") || "[]"
    );

let cropListings =
    JSON.parse(
        localStorage.getItem("kisanCropListings") || "[]"
    );


/* =====================================================
   SELECTED SLOT
===================================================== */

let selectedSlot = null;


/* =====================================================
   ADMIN SESSION
===================================================== */

let adminLoggedIn =
    sessionStorage.getItem("kisanAdminLoggedIn") === "true";

let loggedCenter =
    sessionStorage.getItem("kisanCenter") || "";


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active");

    });


    const target =
        document.getElementById(pageId);

    if (!target) return;


    /*
       Protect Admin Dashboard
    */

    if (
        pageId === "adminDashboard"
        &&
        !adminLoggedIn
    ) {

        document
            .getElementById("adminLogin")
            .classList.add("active");

        return;

    }


    target.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (pageId === "farmer") {

        displayAllSlots();

        updateFarmerRecommendations();

    }


    if (pageId === "sell") {

        displayCropListings();

    }


    if (pageId === "adminDashboard") {

        loadAdminDashboard();

    }

}


/* =====================================================
   INPUT VALIDATION
===================================================== */

/*
   Mobile and Aadhaar:
   Only digits are accepted.
*/

function allowOnlyDigits(inputId, maxLength) {

    const input =
        document.getElementById(inputId);

    if (!input) return;


    input.addEventListener("input", function () {

        this.value =
            this.value
                .replace(/\D/g, "")
                .slice(0, maxLength);

    });

}


allowOnlyDigits("phone", 10);
allowOnlyDigits("farmerId", 12);
allowOnlyDigits("sellPhone", 10);


/* =====================================================
   STRICT VALIDATION
===================================================== */

function isValidMobile(phone) {

    return /^[0-9]{10}$/.test(phone);

}


function isValidAadhaar(aadhaar) {

    return /^[0-9]{12}$/.test(aadhaar);

}


/* =====================================================
   CENTRE RECOMMENDATION
===================================================== */

function recommendCentres() {

    const village =
        document
            .getElementById("village")
            .value
            .trim();

    const container =
        document
            .getElementById("centreRecommendations");


    if (!village) {

        container.innerHTML = `

            <div class="info-message">
                Enter village name to get procurement centre recommendations.
            </div>

        `;

        return;

    }


    /*
       Demo recommendation algorithm.

       In the future this can be replaced with:
       - GPS
       - district database
       - government API
       - actual centre distance calculation
    */

    const normalizedVillage =
        village.toLowerCase();


    let startIndex = 0;


    /*
       Create a deterministic recommendation
       from village name.
    */

    for (let i = 0; i < normalizedVillage.length; i++) {

        startIndex +=
            normalizedVillage.charCodeAt(i);

    }


    startIndex =
        startIndex %
        procurementCentres.length;


    const recommended = [];


    for (
        let i = 0;
        i < procurementCentres.length;
        i++
    ) {

        recommended.push(
            procurementCentres[
                (startIndex + i)
                %
                procurementCentres.length
            ]
        );

    }


    container.innerHTML = "";


    recommended.forEach((centre, index) => {

        const card =
            document.createElement("div");

        card.className =
            "centre-card " +
            (index === 0
                ? "recommended"
                : "");


        card.innerHTML = `

            ${
                index === 0
                ?
                `
                <span class="recommended-label">
                    Recommended
                </span>
                `
                :
                ""
            }

            <h3>
                ${centre.name}
            </h3>

            <p>
                <strong>Centre ID:</strong>
                ${centre.id}
            </p>

            <p>
                <strong>Area:</strong>
                ${centre.villageArea}
            </p>

            <p>
                <strong>Approx. Distance:</strong>
                ${centre.distance}
            </p>

            <p>
                <strong>Capacity:</strong>
                ${centre.capacity} farmers/day
            </p>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   FARMER RECOMMENDATIONS
===================================================== */

function updateFarmerRecommendations() {

    recommendCentres();

    suggestSlots();

}


/* =====================================================
   VILLAGE LIVE UPDATE
===================================================== */

const villageInput =
    document.getElementById("village");


if (villageInput) {

    villageInput.addEventListener(
        "input",
        recommendCentres
    );

}


/* =====================================================
   DISPLAY ALL SLOTS
===================================================== */

function displayAllSlots() {

    const container =
        document.getElementById("allSlots");

    if (!container) return;


    container.innerHTML = "";


    slots.forEach(slot => {

        const isFull =
            slot.booked >= slot.capacity;


        const card =
            document.createElement("div");

        card.className =
            "slot-card " +
            (isFull ? "full" : "");


        card.innerHTML = `

            <h3>
                ${slot.date}
            </h3>

            <p>
                <strong>Time:</strong>
                ${slot.time}
            </p>

            <p>
                <strong>Crop:</strong>
                ${slot.crop}
            </p>

            <p>
                <strong>Bookings:</strong>
                ${slot.booked}/${slot.capacity}
            </p>

            ${
                isFull

                ?

                `
                <span class="badge">
                    Full
                </span>
                `

                :

                `
                <span class="badge">
                    Available
                </span>
                `
            }

        `;


        if (!isFull) {

            card.onclick = function () {

                selectSlot(slot);

            };

        }


        container.appendChild(card);

    });

}


/* =====================================================
   SELECT SLOT
===================================================== */

function selectSlot(slot) {

    selectedSlot = slot;


    document
        .getElementById("selectedSlotText")
        .innerHTML = `

        <strong>Date:</strong>
        ${slot.date}
        <br>

        <strong>Time:</strong>
        ${slot.time}
        <br>

        <strong>Crop:</strong>
        ${slot.crop}
        <br>

        <strong>Current Bookings:</strong>
        ${slot.booked}/${slot.capacity}

    `;


    const box =
        document.querySelector(
            ".selected-slot-box"
        );


    if (box) {

        box.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* =====================================================
   SMART SLOT SUGGESTION
===================================================== */

function suggestSlots() {

    const cropElement =
        document.getElementById("crop");

    const quantityElement =
        document.getElementById("quantity");

    const container =
        document.getElementById("recommendedSlots");


    if (
        !cropElement ||
        !quantityElement ||
        !container
    ) return;


    const farmerCrop =
        cropElement.value;

    const quantity =
        Number(quantityElement.value);


    if (
        !farmerCrop ||
        !quantity ||
        quantity <= 0
    ) {

        container.innerHTML = `

            <div class="info-message">
                Select crop and quantity to get recommendations.
            </div>

        `;

        return;

    }


    let availableSlots =
        slots.filter(
            slot =>
                slot.booked <
                slot.capacity
        );


    availableSlots.forEach(slot => {

        let score = 0;


        /*
           Crop match gets strong priority.
        */

        if (
            slot.crop.toLowerCase()
            ===
            farmerCrop.toLowerCase()
        ) {

            score += 100;

        }


        /*
           Less crowd = higher score.
        */

        score +=
            (
                slot.capacity
                -
                slot.booked
            ) * 10;


        slot.recommendationScore =
            score;

    });


    availableSlots.sort(
        (a, b) => {

            if (
                b.recommendationScore
                !==
                a.recommendationScore
            ) {

                return (
                    b.recommendationScore
                    -
                    a.recommendationScore
                );

            }


            return a.id - b.id;

        }
    );


    const topSlots =
        availableSlots.slice(0, 3);


    container.innerHTML = "";


    topSlots.forEach(
        (slot, index) => {

            const card =
                document.createElement("div");

            card.className =
                "slot-card";


            card.innerHTML = `

                <span class="badge">
                    ${
                        index === 0
                        ?
                        "Recommended"
                        :
                        "Alternative"
                    }
                </span>

                <h3>
                    ${slot.date}
                </h3>

                <p>
                    <strong>Time:</strong>
                    ${slot.time}
                </p>

                <p>
                    <strong>Crop:</strong>
                    ${slot.crop}
                </p>

                <p>
                    <strong>Bookings:</strong>
                    ${slot.booked}/${slot.capacity}
                </p>

                <button
                    class="primary-btn"
                    type="button">

                    Select This Slot

                </button>

            `;


            card.onclick = function () {

                selectSlot(slot);

            };


            container.appendChild(card);

        }
    );

}


/* =====================================================
   BOOKING ID
===================================================== */

function generateBookingId() {

    const random =
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    return "KISAN-" + random;

}


/* =====================================================
   CONFIRM BOOKING
===================================================== */

function confirmBooking() {

    const name =
        document
            .getElementById("name")
            .value
            .trim();


    const phone =
        document
            .getElementById("phone")
            .value
            .trim();


    const farmerId =
        document
            .getElementById("farmerId")
            .value
            .trim();


    const village =
        document
            .getElementById("village")
            .value
            .trim();


    const crop =
        document
            .getElementById("crop")
            .value;


    const quantity =
        document
            .getElementById("quantity")
            .value;


    /*
       Required fields
    */

    if (
        !name ||
        !phone ||
        !farmerId ||
        !village ||
        !crop ||
        !quantity
    ) {

        alert(
            "Please fill all farmer details."
        );

        return;

    }


    /*
       MOBILE VALIDATION
    */

    if (!isValidMobile(phone)) {

        alert(
            "Mobile number must contain exactly 10 digits."
        );

        document
            .getElementById("phone")
            .focus();

        return;

    }


    /*
       AADHAAR VALIDATION
    */

    if (!isValidAadhaar(farmerId)) {

        alert(
            "Aadhaar number must contain exactly 12 digits."
        );

        document
            .getElementById("farmerId")
            .focus();

        return;

    }


    /*
       QUANTITY VALIDATION
    */

    if (
        Number(quantity) <= 0
    ) {

        alert(
            "Quantity must be greater than zero."
        );

        return;

    }


    /*
       SLOT VALIDATION
    */

    if (!selectedSlot) {

        alert(
            "Please select a procurement slot."
        );

        return;

    }


    if (
        selectedSlot.booked
        >=
        selectedSlot.capacity
    ) {

        alert(
            "Sorry, this slot is already full."
        );

        displayAllSlots();

        return;

    }


    /*
       CENTRE
    */

    const villageCentre =
        getRecommendedCentre(village);


    /*
       BOOKING
    */

    const bookingId =
        generateBookingId();


    const queuePosition =
        selectedSlot.booked + 1;


    const booking = {

        bookingId,

        name,

        phone,

        farmerId,

        village,

        centreId:
            villageCentre.id,

        centreName:
            villageCentre.name,

        crop,

        quantity,

        date:
            selectedSlot.date,

        time:
            selectedSlot.time,

        slotId:
            selectedSlot.id,

        queuePosition,

        estimatedWait:
            queuePosition * 15
            + " minutes",

        status:
            "Booking Confirmed",

        paymentStatus:
            "Pending"

    };


    bookings.push(booking);


    localStorage.setItem(
        "kisanBookings",
        JSON.stringify(bookings)
    );


    selectedSlot.booked++;


    /*
       SUCCESS MESSAGE
    */

    document
        .getElementById("successMessage")
        .innerHTML = `

        <strong>Booking ID:</strong>
        ${bookingId}

        <br><br>

        <strong>Centre:</strong>
        ${villageCentre.name}

        <br><br>

        <strong>Slot:</strong>
        ${booking.date}
        |
        ${booking.time}

        <br><br>

        <strong>Queue Position:</strong>
        ${queuePosition}

    `;


    document
        .getElementById("successModal")
        .classList.add("show");


    /*
       Reset form
    */

    document
        .getElementById("farmerForm")
        .reset();


    document
        .getElementById("recommendedSlots")
        .innerHTML = `

        <div class="info-message">
            Select crop and quantity to get recommendations.
        </div>

    `;


    document
        .getElementById("centreRecommendations")
        .innerHTML = `

        <div class="info-message">
            Enter village name to get recommendations.
        </div>

    `;


    selectedSlot = null;


    document
        .getElementById("selectedSlotText")
        .innerText =
        "No slot selected.";


    displayAllSlots();

}


/* =====================================================
   GET RECOMMENDED CENTRE
===================================================== */

function getRecommendedCentre(village) {

    let index = 0;


    for (
        let i = 0;
        i < village.length;
        i++
    ) {

        index +=
            village.charCodeAt(i);

    }


    index =
        index %
        procurementCentres.length;


    return procurementCentres[index];

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    document
        .getElementById("successModal")
        .classList.remove("show");


    showPage("track");

}


/* =====================================================
   TRACK BOOKING
===================================================== */

function trackBooking() {

    const searchValue =
        document
            .getElementById("searchBooking")
            .value
            .trim();


    const result =
        document
            .getElementById("trackingResult");


    if (!searchValue) {

        alert(
            "Please enter Booking ID or mobile number."
        );

        return;

    }


    const booking =
        bookings.find(
            b =>
                b.phone === searchValue
                ||
                b.bookingId.toLowerCase()
                ===
                searchValue.toLowerCase()
        );


    if (!booking) {

        result.innerHTML = `

            <div class="tracking-card">

                <h2>
                    No Booking Found
                </h2>

                <p>
                    Please check your Booking ID
                    or mobile number.
                </p>

            </div>

        `;

        return;

    }


    const steps = [

        "Booking Confirmed",

        "Arrived",

        "Quality Checked",

        "Procurement Done",

        "Payment Processed"

    ];


    let currentIndex =
        steps.indexOf(
            booking.status
        );


    if (currentIndex < 0) {

        currentIndex = 0;

    }


    let timelineHTML = "";


    steps.forEach(
        (step, index) => {

            let className =
                "timeline-step";


            if (
                index <
                currentIndex
            ) {

                className +=
                    " completed";

            }

            else if (
                index ===
                currentIndex
            ) {

                className +=
                    " current";

            }


            timelineHTML += `

                <div class="${className}">
                    ${step}
                </div>

            `;

        }
    );


    result.innerHTML = `

        <div class="tracking-card">

            <h2>
                Booking Details
            </h2>

            <br>

            <p>
                <strong>Farmer:</strong>
                ${booking.name}
            </p>

            <p>
                <strong>Booking ID:</strong>
                ${booking.bookingId}
            </p>

            <p>
                <strong>Centre:</strong>
                ${booking.centreName}
            </p>

            <p>
                <strong>Village:</strong>
                ${booking.village}
            </p>

            <p>
                <strong>Crop:</strong>
                ${booking.crop}
            </p>

            <p>
                <strong>Quantity:</strong>
                ${booking.quantity} quintal
            </p>

            <p>
                <strong>Slot:</strong>
                ${booking.date}
                |
                ${booking.time}
            </p>

            <p>
                <strong>Queue Position:</strong>
                ${booking.queuePosition}
            </p>

            <p>
                <strong>Estimated Wait:</strong>
                ${booking.estimatedWait}
            </p>

            <p>
                <strong>Current Status:</strong>
                ${booking.status}
            </p>

            <div class="timeline">
                ${timelineHTML}
            </div>

        </div>

    `;

}


/* =====================================================
   CROP SELLING
===================================================== */

function showGovernmentPrice() {

    const crop =
        document
            .getElementById("sellCrop")
            .value;


    const box =
        document
            .getElementById("governmentPriceBox");


    if (!crop) {

        box.innerHTML =
            "Select a crop to view government procurement price.";

        return;

    }


    const price =
        governmentPrices[crop];


    box.innerHTML = `

        <div>
            Government Procurement Price
        </div>

        <div class="price-value">
            ₹${price.toLocaleString("en-IN")}
            <small> / quintal</small>
        </div>

        <small>
            Demo value — connect with the official government
            price database/API before production deployment.
        </small>

    `;

}


/* =====================================================
   LIST CROP
===================================================== */

function listCrop(event) {

    event.preventDefault();


    const name =
        document
            .getElementById("sellName")
            .value
            .trim();


    const phone =
        document
            .getElementById("sellPhone")
            .value
            .trim();


    const crop =
        document
            .getElementById("sellCrop")
            .value;


    const quantity =
        Number(
            document
                .getElementById("sellQuantity")
                .value
        );


    const village =
        document
            .getElementById("sellVillage")
            .value
            .trim();


    if (!isValidMobile(phone)) {

        alert(
            "Mobile number must contain exactly 10 digits."
        );

        return;

    }


    if (
        !name ||
        !crop ||
        !quantity ||
        !village
    ) {

        alert(
            "Please fill all crop details."
        );

        return;

    }


    if (quantity <= 0) {

        alert(
            "Quantity must be greater than zero."
        );

        return;

    }


    const listing = {

        id:
            "CROP-" +
            Date.now()
                .toString()
                .slice(-6),

        name,

        phone,

        crop,

        quantity,

        village,

        governmentPrice:
            governmentPrices[crop],

        status:
            "Listed for Procurement",

        date:
            new Date()
                .toLocaleDateString("en-IN")

    };


    cropListings.push(listing);


    localStorage.setItem(
        "kisanCropListings",
        JSON.stringify(cropListings)
    );


    alert(
        "Crop successfully listed for government procurement."
    );


    document
        .getElementById("cropForm")
        .reset();


    document
        .getElementById("governmentPriceBox")
        .innerText =
        "Select a crop to view government procurement price.";


    displayCropListings();

}


/* =====================================================
   DISPLAY CROP LISTINGS
===================================================== */

function displayCropListings() {

    const container =
        document
            .getElementById("listedCrops");


    if (!container) return;


    if (
        cropListings.length === 0
    ) {

        container.innerHTML = `

            <p class="info-message">
                No crops listed yet.
            </p>

        `;

        return;

    }


    container.innerHTML = "";


    cropListings
        .slice()
        .reverse()
        .forEach(
            listing => {

                const card =
                    document.createElement("div");


                card.className =
                    "slot-card";


                card.innerHTML = `

                    <span class="badge">
                        ${listing.status}
                    </span>

                    <h3>
                        ${listing.crop}
                    </h3>

                    <p>
                        <strong>Farmer:</strong>
                        ${listing.name}
                    </p>

                    <p>
                        <strong>Quantity:</strong>
                        ${listing.quantity}
                        quintal
                    </p>

                    <p>
                        <strong>Village:</strong>
                        ${listing.village}
                    </p>

                    <p>
                        <strong>Government Price:</strong>
                        ₹${listing.governmentPrice.toLocaleString("en-IN")}
                        / quintal
                    </p>

                `;


                container.appendChild(card);

            }
        );

}


/* =====================================================
   ADMIN LOGIN
===================================================== */

function adminLogin(event) {

    event.preventDefault();


    const centerId =
        document
            .getElementById("centerId")
            .value
            .trim()
            .toUpperCase();


    const password =
        document
            .getElementById("adminPassword")
            .value;


    /*
       DEMO CREDENTIALS

       Center ID:
       CENTER-A

       Password:
       admin123
    */

    if (
        centerId === "CENTER-A"
        &&
        password === "admin123"
    ) {

        adminLoggedIn = true;

        loggedCenter =
            centerId;


        sessionStorage.setItem(
            "kisanAdminLoggedIn",
            "true"
        );


        sessionStorage.setItem(
            "kisanCenter",
            centerId
        );


        document
            .getElementById("loggedCenter")
            .innerText =
            "Logged in as: " +
            centerId;


        showPage("adminDashboard");


    }

    else {

        alert(
            "Invalid Centre ID or password."
        );

    }

}


/* =====================================================
   ADMIN LOGOUT
===================================================== */

function adminLogout() {

    adminLoggedIn = false;

    loggedCenter = "";


    sessionStorage.removeItem(
        "kisanAdminLoggedIn"
    );


    sessionStorage.removeItem(
        "kisanCenter"
    );


    showPage("home");

}


/* =====================================================
   ADMIN DASHBOARD
===================================================== */

function loadAdminDashboard() {

    if (!adminLoggedIn) {

        showPage("adminLogin");

        return;

    }


    document
        .getElementById("loggedCenter")
        .innerText =
        "Logged in as: " +
        loggedCenter;


    const table =
        document
            .getElementById("adminTable");


    table.innerHTML = "";


    if (
        bookings.length === 0
    ) {

        table.innerHTML = `

            <tr>

                <td colspan="8">
                    No bookings available.
                </td>

            </tr>

        `;

    }


    bookings.forEach(
        (booking, index) => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${booking.bookingId}
                </td>

                <td>
                    ${booking.name}
                </td>

                <td>
                    ${booking.phone}
                </td>

                <td>
                    ${booking.crop}
                </td>

                <td>
                    ${booking.quantity}
                </td>

                <td>
                    ${booking.date}
                    <br>
                    ${booking.time}
                </td>

                <td>
                    ${booking.status}
                </td>

                <td>

                    <button
                        class="action-btn"
                        onclick="updateStatus(${index}, 'Arrived')">

                        Arrived

                    </button>

                    <button
                        class="action-btn"
                        onclick="updateStatus(${index}, 'Quality Checked')">

                        Quality

                    </button>

                    <button
                        class="action-btn"
                        onclick="updateStatus(${index}, 'Procurement Done')">

                        Done

                    </button>

                    <button
                        class="action-btn"
                        onclick="updateStatus(${index}, 'Payment Processed')">

                        Payment

                    </button>

                </td>

            `;


            table.appendChild(row);

        }
    );


    loadAdminCropListings();

    updateStats();

}


/* =====================================================
   UPDATE STATUS
===================================================== */

function updateStatus(
    index,
    newStatus
) {

    if (
        !bookings[index]
    ) return;


    bookings[index].status =
        newStatus;


    localStorage.setItem(
        "kisanBookings",
        JSON.stringify(bookings)
    );


    loadAdminDashboard();

}


/* =====================================================
   ADMIN CROP LISTINGS
===================================================== */

function loadAdminCropListings() {

    const table =
        document
            .getElementById("adminCropTable");


    if (!table) return;


    table.innerHTML = "";


    if (
        cropListings.length === 0
    ) {

        table.innerHTML = `

            <tr>

                <td colspan="7">
                    No crop listings available.
                </td>

            </tr>

        `;

        return;

    }


    cropListings.forEach(
        listing => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${listing.name}
                </td>

                <td>
                    ${listing.phone}
                </td>

                <td>
                    ${listing.crop}
                </td>

                <td>
                    ${listing.quantity}
                    quintal
                </td>

                <td>
                    ${listing.village}
                </td>

                <td>
                    ₹${listing.governmentPrice.toLocaleString("en-IN")}
                    / quintal
                </td>

                <td>
                    ${listing.status}
                </td>

            `;


            table.appendChild(row);

        }
    );

}


/* =====================================================
   ADMIN STATISTICS
===================================================== */

function updateStats() {

    const total =
        bookings.length;


    const completed =
        bookings.filter(
            booking =>
                booking.status ===
                    "Procurement Done"
                ||
                booking.status ===
                    "Payment Processed"
        ).length;


    const pending =
        total -
        completed;


    document
        .getElementById("totalBookings")
        .innerText =
        total;


    document
        .getElementById("completedBookings")
        .innerText =
        completed;


    document
        .getElementById("pendingBookings")
        .innerText =
        pending;


    document
        .getElementById("totalCropListings")
        .innerText =
        cropListings.length;

}


/* =====================================================
   INITIAL LOAD
===================================================== */

displayAllSlots();

displayCropListings();


/*
   If admin session already exists,
   keep dashboard ready.
*/

if (adminLoggedIn) {

    const centerElement =
        document
            .getElementById("loggedCenter");


    if (centerElement) {

        centerElement.innerText =
            "Logged in as: " +
            loggedCenter;

    }

}
