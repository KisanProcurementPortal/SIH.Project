/* ==========================================================
   KISAN PROCUREMENT PORTAL
   Enhanced Frontend Demo
   ==========================================================
   Features:
   1. Mobile validation
   2. Aadhaar validation
   3. Farmer Portal
   4. Admin Portal + Centre ID login
   5. Crop Selling
   6. Village based Centre Recommendation
   7. Slot Booking
   8. Booking Tracking
   ========================================================== */


/* ==========================================================
   PROCUREMENT SLOTS
   ========================================================== */

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


/* ==========================================================
   LOCAL STORAGE
   ========================================================== */

let bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];


let cropListings =
    JSON.parse(localStorage.getItem("cropListings")) || [];


let selectedSlot = null;


/* ==========================================================
   ADMIN CENTRES
   DEMO ONLY
   ========================================================== */

const adminCenters = {

    "CENTER-A": {
        name: "Procurement Center A",
        password: "admin123"
    },

    "CENTER-B": {
        name: "Procurement Center B",
        password: "admin123"
    },

    "CENTER-C": {
        name: "Procurement Center C",
        password: "admin123"
    }

};


let loggedInCenter =
    sessionStorage.getItem("loggedInCenter") || null;


/* ==========================================================
   PAGE NAVIGATION
   ========================================================== */

function showPage(pageId) {

    /* Protect Admin Dashboard */

    if (
        pageId === "admin"
        &&
        !loggedInCenter
    ) {

        openAdminLogin();

        return;

    }


    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(pageId);


    if (!page) return;


    page.classList.add("active");


    if (pageId === "booking") {

        displayAllSlots();

    }


    if (pageId === "cropSelling") {

        displayCropListings();

    }


    if (pageId === "admin") {

        loadAdminDashboard();

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================================
   ADMIN LOGIN OPEN
   ========================================================== */

function openAdminLogin() {

    document
        .querySelectorAll(".page")
        .forEach(page =>
            page.classList.remove("active")
        );


    document
        .getElementById("adminLogin")
        .classList.add("active");


    document
        .getElementById("centerId")
        .focus();

}


/* ==========================================================
   ADMIN LOGIN
   ========================================================== */

function adminLogin() {

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


    if (!centerId || !password) {

        alert(
            "Please enter Centre ID and password."
        );

        return;

    }


    const center =
        adminCenters[centerId];


    if (
        !center
        ||
        center.password !== password
    ) {

        alert(
            "Invalid Centre ID or password."
        );

        return;

    }


    loggedInCenter = centerId;


    sessionStorage.setItem(
        "loggedInCenter",
        centerId
    );


    document
        .getElementById("loggedCenter")
        .innerText =
            center.name +
            " | Centre ID: " +
            centerId;


    document
        .getElementById("centerId")
        .value = "";

    document
        .getElementById("adminPassword")
        .value = "";


    showPage("admin");

}


/* ==========================================================
   ADMIN LOGOUT
   ========================================================== */

function adminLogout() {

    loggedInCenter = null;

    sessionStorage.removeItem(
        "loggedInCenter"
    );


    showPage("home");

}


/* ==========================================================
   MOBILE VALIDATION
   ========================================================== */

function isValidMobile(phone) {

    return /^[0-9]{10}$/.test(phone);

}


/* ==========================================================
   AADHAAR VALIDATION
   ========================================================== */

function isValidAadhaar(aadhaar) {

    return /^[0-9]{12}$/.test(aadhaar);

}


/* ==========================================================
   BLOCK NON-NUMERIC INPUT
   ========================================================== */

function allowOnlyNumbers(event) {

    if (
        !/[0-9]/.test(event.key)
        &&
        event.key !== "Backspace"
        &&
        event.key !== "Delete"
        &&
        event.key !== "ArrowLeft"
        &&
        event.key !== "ArrowRight"
        &&
        event.key !== "Tab"
    ) {

        event.preventDefault();

    }

}


/* ==========================================================
   ATTACH INPUT VALIDATION
   ========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const phone =
            document.getElementById("phone");

        const farmerId =
            document.getElementById("farmerId");

        const sellPhone =
            document.getElementById("sellPhone");


        [
            phone,
            farmerId,
            sellPhone
        ].forEach(input => {

            if (!input) return;

            input.addEventListener(
                "keydown",
                allowOnlyNumbers
            );


            input.addEventListener(
                "input",
                function() {

                    this.value =
                        this.value
                        .replace(/\D/g, "");

                }
            );

        });

    }
);


/* ==========================================================
   PROCUREMENT CENTRE RECOMMENDATION
   ========================================================== */

function recommendCenters() {

    const village =
        document
            .getElementById("village")
            .value
            .trim();


    const list =
        document
            .getElementById("centerList");


    if (!village) {

        list.innerHTML = `

            <p>
                Enter your village to see
                recommended procurement centres.
            </p>

        `;

        return;

    }


    /*
       DEMO LOGIC

       Later this can be replaced with:

       GPS
       Google Maps
       Government centre database
       Distance API
    */


    const centers = [

        {
            id: "CENTER-A",
            name: "Procurement Center A",
            distance: "2.4 km"
        },

        {
            id: "CENTER-B",
            name: "Procurement Center B",
            distance: "4.1 km"
        },

        {
            id: "CENTER-C",
            name: "Procurement Center C",
            distance: "6.8 km"
        }

    ];


    /*
       Deterministic demo recommendation.

       Village name determines starting point,
       so recommendations don't change randomly
       every time the user types.
    */

    let hash = 0;

    for (
        let i = 0;
        i < village.length;
        i++
    ) {

        hash =
            village.charCodeAt(i)
            +
            ((hash << 5) - hash);

    }


    const start =
        Math.abs(hash) % centers.length;


    const recommended = [

        centers[start],

        centers[(start + 1) % centers.length],

        centers[(start + 2) % centers.length]

    ];


    list.innerHTML = "";


    recommended.forEach(
        (center, index) => {

            const card =
                document.createElement("div");


            card.className =
                "center-card";


            card.innerHTML = `

                <div>

                    <strong>
                        ${index === 0 ? "⭐ Recommended: " : ""}
                        ${center.name}
                    </strong>

                    <br>

                    <small>
                        Centre ID: ${center.id}
                        |
                        Approx. Distance: ${center.distance}
                    </small>

                </div>


                <button
                    onclick="selectCenter('${center.id}')">

                    Select

                </button>

            `;


            list.appendChild(card);

        }
    );

}


/* ==========================================================
   SELECT CENTRE
   ========================================================== */

function selectCenter(centerId) {

    localStorage.setItem(
        "selectedCenter",
        centerId
    );


    alert(
        "Procurement Centre selected: "
        + centerId
    );

}


/* ==========================================================
   DISPLAY ALL SLOTS
   ========================================================== */

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

            <span class="badge">

                ${
                    isFull
                    ? "Full"
                    : "Available"
                }

            </span>

        `;


        if (!isFull) {

            card.onclick =
                () => selectSlot(slot);

        }


        container.appendChild(card);

    });

}


/* ==========================================================
   SELECT SLOT
   ========================================================== */

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


    document
        .getElementById("selectedSlotBox")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* ==========================================================
   SMART SLOT SUGGESTION
   ========================================================== */

function suggestSlots() {

    const farmerCrop =
        document
            .getElementById("crop")
            .value;


    const quantity =
        document
            .getElementById("quantity")
            .value;


    const container =
        document
            .getElementById("recommendedSlots");


    if (
        !farmerCrop
        ||
        !quantity
        ||
        Number(quantity) <= 0
    ) {

        container.innerHTML = `

            <p class="info-message">

                Select crop type and quantity
                to get recommendations.

            </p>

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


        /* Less crowd */

        score +=
            (
                slot.capacity -
                slot.booked
            ) * 10;


        /* Crop match */

        if (
            slot.crop.toLowerCase()
            ===
            farmerCrop.toLowerCase()
        ) {

            score += 100;

        }


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


            return (
                new Date(a.date)
                -
                new Date(b.date)
            );

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
                        ? "Recommended"
                        : "Alternative"
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
                    <strong>Best for:</strong>
                    ${slot.crop}
                </p>

                <p>
                    <strong>Bookings:</strong>
                    ${slot.booked}/${slot.capacity}
                </p>

                <button class="primary-btn">

                    Select This Slot

                </button>

            `;


            card.onclick =
                () => selectSlot(slot);


            container.appendChild(card);

        }
    );

}


/* ==========================================================
   BOOKING ID
   ========================================================== */

function generateBookingId() {

    return (
        "KISAN-"
        +
        Date.now()
            .toString()
            .slice(-6)
    );

}


/* ==========================================================
   CONFIRM BOOKING
   ========================================================== */

function confirmBooking() {

    const name =
        document.getElementById("name").value.trim();


    const phone =
        document.getElementById("phone").value.trim();


    const farmerId =
        document.getElementById("farmerId").value.trim();


    const village =
        document.getElementById("village").value.trim();


    const crop =
        document.getElementById("crop").value;


    const quantity =
        document.getElementById("quantity").value;


    /* Required fields */

    if (
        !name ||
        !phone ||
        !farmerId ||
        !village ||
        !crop ||
        !quantity
    ) {

        alert(
            "Please fill all farmer details first."
        );

        return;

    }


    /* MOBILE */

    if (!isValidMobile(phone)) {

        alert(
            "Invalid mobile number. Please enter exactly 10 digits."
        );

        document
            .getElementById("phone")
            .focus();

        return;

    }


    /* AADHAAR */

    if (!isValidAadhaar(farmerId)) {

        alert(
            "Invalid Aadhaar number. Please enter exactly 12 digits."
        );

        document
            .getElementById("farmerId")
            .focus();

        return;

    }


    /* QUANTITY */

    if (Number(quantity) <= 0) {

        alert(
            "Quantity must be greater than zero."
        );

        return;

    }


    /* SLOT */

    if (!selectedSlot) {

        alert(
            "Please select a procurement slot."
        );

        return;

    }


    /* CAPACITY */

    if (
        selectedSlot.booked
        >=
        selectedSlot.capacity
    ) {

        alert(
            "Sorry, this slot is already full."
        );

        return;

    }


    /* CENTRE */

    const selectedCenter =
        localStorage.getItem(
            "selectedCenter"
        )
        ||
        "CENTER-A";


    /* BOOKING ID */

    const bookingId =
        generateBookingId();


    const queuePosition =
        selectedSlot.booked + 1;


    const estimatedWait =
        queuePosition * 15;


    const booking = {

        bookingId,

        name,

        phone,

        farmerId,

        village,

        crop,

        quantity,

        centerId:
            selectedCenter,

        date:
            selectedSlot.date,

        time:
            selectedSlot.time,

        slotId:
            selectedSlot.id,

        queuePosition,

        estimatedWait:
            estimatedWait + " minutes",

        status:
            "Booking Confirmed",

        paymentStatus:
            "Pending",

        createdAt:
            new Date().toISOString()

    };


    bookings.push(booking);


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


    selectedSlot.booked++;


    document
        .getElementById("successMessage")
        .innerHTML = `

        <strong>Booking ID:</strong>
        ${bookingId}

        <br><br>

        <strong>Procurement Centre:</strong>
        ${selectedCenter}

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


    document
        .getElementById("farmerForm")
        .reset();


    document
        .getElementById("centerList")
        .innerHTML = `

        <p>
            Enter your village to see recommendations.
        </p>

    `;


    selectedSlot = null;


    displayAllSlots();

}


/* ==========================================================
   CLOSE MODAL
   ========================================================== */

function closeModal() {

    document
        .getElementById("successModal")
        .classList.remove("show");


    showPage("track");

}


/* ==========================================================
   TRACK BOOKING
   ========================================================== */

function trackBooking() {

    const searchValue =
        document
            .getElementById("searchBooking")
            .value
            .trim();


    if (!searchValue) {

        alert(
            "Please enter phone number or booking ID."
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


    const result =
        document
            .getElementById("trackingResult");


    if (!booking) {

        result.innerHTML = `

            <div class="tracking-card">

                <h2>
                    No Booking Found
                </h2>

                <p>
                    Please check your phone number
                    or booking ID.
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


    if (currentIndex === -1) {

        currentIndex = 0;

    }


    let timelineHTML = "";


    steps.forEach(
        (step, index) => {

            let className =
                "timeline-step";


            if (index < currentIndex) {

                className +=
                    " completed";

            }

            else if (
                index === currentIndex
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
                Farmer Booking Details
            </h2>

            <br>

            <p>
                <strong>Name:</strong>
                ${booking.name}
            </p>

            <p>
                <strong>Booking ID:</strong>
                ${booking.bookingId}
            </p>

            <p>
                <strong>Crop:</strong>
                ${booking.crop}
            </p>

            <p>
                <strong>Quantity:</strong>
                ${booking.quantity} Quintal
            </p>

            <p>
                <strong>Centre:</strong>
                ${booking.centerId}
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
                <strong>Current Status:</strong>
                ${booking.status}
            </p>

            <div class="timeline">

                ${timelineHTML}

            </div>

        </div>

    `;

}


/* ==========================================================
   ADMIN DASHBOARD
   ========================================================== */

function loadAdminDashboard() {

    if (!loggedInCenter) {

        openAdminLogin();

        return;

    }


    const table =
        document
            .getElementById("adminTable");


    table.innerHTML = "";


    const centerBookings =
        bookings.filter(
            booking =>
                booking.centerId ===
                loggedInCenter
                ||
                !booking.centerId
        );


    centerBookings.forEach(
        booking => {

            const actualIndex =
                bookings.indexOf(
                    booking
                );


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
                    ${booking.village}
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
                        onclick="updateStatus(
                            ${actualIndex},
                            'Arrived'
                        )">

                        Arrived

                    </button>

                    <button
                        class="action-btn"
                        onclick="updateStatus(
                            ${actualIndex},
                            'Quality Checked'
                        )">

                        Quality

                    </button>

                    <button
                        class="action-btn"
                        onclick="updateStatus(
                            ${actualIndex},
                            'Procurement Done'
                        )">

                        Done

                    </button>

                    <button
                        class="action-btn"
                        onclick="updateStatus(
                            ${actualIndex},
                            'Payment Processed'
                        )">

                        Payment

                    </button>

                </td>

            `;


            table.appendChild(row);

        }
    );


    updateStats();


    displayAdminCropListings();

}


/* ==========================================================
   UPDATE STATUS
   ========================================================== */

function updateStatus(
    index,
    newStatus
) {

    if (!bookings[index]) return;


    bookings[index].status =
        newStatus;


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


    loadAdminDashboard();

}


/* ==========================================================
   ADMIN STATS
   ========================================================== */

function updateStats() {

    const centerBookings =
        bookings.filter(
            booking =>
                booking.centerId ===
                loggedInCenter
                ||
                !booking.centerId
        );


    const total =
        centerBookings.length;


    const completed =
        centerBookings.filter(
            booking =>
                booking.status ===
                "Procurement Done"
                ||
                booking.status ===
                "Payment Processed"
        ).length;


    const pending =
        total - completed;


    document
        .getElementById("totalBookings")
        .innerText = total;


    document
        .getElementById("completedBookings")
        .innerText = completed;


    document
        .getElementById("pendingBookings")
        .innerText = pending;


    document
        .getElementById("totalCropListings")
        .innerText =
            cropListings.length;

}


/* ==========================================================
   LIST CROP
   ========================================================== */

function listCrop() {

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


    const village =
        document
            .getElementById("sellVillage")
            .value
            .trim();


    const crop =
        document
            .getElementById("sellCrop")
            .value;


    const quantity =
        document
            .getElementById("sellQuantity")
            .value;


    const expectedPrice =
        document
            .getElementById("expectedPrice")
            .value;


    if (
        !name ||
        !phone ||
        !village ||
        !crop ||
        !quantity ||
        !expectedPrice
    ) {

        alert(
            "Please fill all crop listing details."
        );

        return;

    }


    if (!isValidMobile(phone)) {

        alert(
            "Invalid mobile number. Enter exactly 10 digits."
        );

        return;

    }


    if (Number(quantity) <= 0) {

        alert(
            "Quantity must be greater than zero."
        );

        return;

    }


    if (Number(expectedPrice) <= 0) {

        alert(
            "Government price must be greater than zero."
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

        village,

        crop,

        quantity,

        expectedPrice,

        status:
            "Listed",

        createdAt:
            new Date().toISOString()

    };


    cropListings.push(listing);


    localStorage.setItem(
        "cropListings",
        JSON.stringify(cropListings)
    );


    alert(
        "Crop successfully listed for procurement."
    );


    document
        .getElementById("cropForm")
        .reset();


    displayCropListings();

}


/* ==========================================================
   DISPLAY FARMER CROP LISTINGS
   ========================================================== */

function displayCropListings() {

    const container =
        document
            .getElementById("cropListings");


    if (!container) return;


    if (cropListings.length === 0) {

        container.innerHTML = `

            <p>
                No crop listings yet.
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

                const item =
                    document.createElement("div");


                item.className =
                    "crop-item";


                item.innerHTML = `

                    <h3>
                        ${listing.crop}
                    </h3>

                    <p>
                        <strong>Farmer:</strong>
                        ${listing.name}
                    </p>

                    <p>
                        <strong>Village:</strong>
                        ${listing.village}
                    </p>

                    <p>
                        <strong>Quantity:</strong>
                        ${listing.quantity}
                        Quintal
                    </p>

                    <p>
                        <strong>Government Price:</strong>
                        ₹${listing.expectedPrice}
                        / Quintal
                    </p>

                    <span class="crop-status">
                        ${listing.status}
                    </span>

                `;


                container.appendChild(item);

            }
        );

}


/* ==========================================================
   DISPLAY ADMIN CROP LISTINGS
   ========================================================== */

function displayAdminCropListings() {

    const container =
        document
            .getElementById(
                "adminCropListings"
            );


    if (!container) return;


    if (cropListings.length === 0) {

        container.innerHTML = `

            <p>
                No farmer crop listings.
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

                const item =
                    document.createElement("div");


                item.className =
                    "crop-item";


                item.innerHTML = `

                    <h3>
                        ${listing.crop}
                    </h3>

                    <p>
                        <strong>Farmer:</strong>
                        ${listing.name}
                    </p>

                    <p>
                        <strong>Phone:</strong>
                        ${listing.phone}
                    </p>

                    <p>
                        <strong>Village:</strong>
                        ${listing.village}
                    </p>

                    <p>
                        <strong>Quantity:</strong>
                        ${listing.quantity}
                        Quintal
                    </p>

                    <p>
                        <strong>Expected Government Price:</strong>
                        ₹${listing.expectedPrice}
                        / Quintal
                    </p>

                    <span class="crop-status">
                        ${listing.status}
                    </span>

                `;


                container.appendChild(item);

            }
        );

}


/* ==========================================================
   INITIAL LOAD
   ========================================================== */

displayAllSlots();


if (loggedInCenter) {

    const center =
        adminCenters[loggedInCenter];


    if (center) {

        const logged =
            document
                .getElementById(
                    "loggedCenter"
                );


        if (logged) {

            logged.innerText =
                center.name +
                " | Centre ID: " +
                loggedInCenter;

        }

    }

}
