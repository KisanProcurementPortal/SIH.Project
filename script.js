/* =====================================================
   KISAN PROCUREMENT PORTAL
   Frontend Demo Version
   Database Simulation: LocalStorage
===================================================== */


/* =====================================================
   PROCUREMENT SLOTS DATABASE
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
   LOAD BOOKINGS
===================================================== */

let bookings =
    JSON.parse(
        localStorage.getItem("bookings")
    ) || [];


/* =====================================================
   SELECTED SLOT
===================================================== */

let selectedSlot = null;


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });

    document
        .getElementById(pageId)
        .classList.add("active");


    if (pageId === "admin") {

        loadAdminDashboard();

    }


    if (pageId === "booking") {

        displayAllSlots();

    }

}


/* =====================================================
   DISPLAY ALL AVAILABLE SLOTS
===================================================== */

function displayAllSlots() {

    const container =
        document.getElementById("allSlots");

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

            <h3>${slot.date}</h3>

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
                `<span class="badge">
                    Full
                </span>`
                :
                `<span class="badge">
                    Available
                </span>`
            }

        `;


        if (!isFull) {

            card.onclick = () =>
                selectSlot(slot);

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

        <strong>Date:</strong> ${slot.date}<br>

        <strong>Time:</strong> ${slot.time}<br>

        <strong>Crop:</strong> ${slot.crop}<br>

        <strong>Current Bookings:</strong>
        ${slot.booked}/${slot.capacity}

        `;


    window.scrollTo({

        top:
            document
                .getElementById("selectedSlotBox")
                .offsetTop - 100,

        behavior: "smooth"

    });

}


/* =====================================================
   SMART SLOT SUGGESTION ENGINE

   DEMO EXPLANATION FOR JUDGES:

   1. Get all slots that are not full
   2. Give priority to crop matching slots
   3. Give priority to less crowded slots
   4. If scores are equal, earliest slot wins
   5. Show top 3 slots

   This is a simple RULE-BASED recommendation system.
   No Machine Learning model is required.
===================================================== */

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


    /* Check required data */

    if (!farmerCrop || !quantity) {

        container.innerHTML = `

            <p class="info-message">

                Select crop type and expected quantity
                to get smart recommendations.

            </p>

        `;

        return;

    }


    /*
        STEP 1:
        Get all slots which are NOT full
    */

    let availableSlots =
        slots.filter(slot =>
            slot.booked < slot.capacity
        );


    /*
        STEP 2:
        Calculate recommendation score

        Lower crowd = better
        Crop match = big priority
        Earlier date = used for tie-breaking
    */

    availableSlots.forEach(slot => {

        let score = 0;


        /*
            RULE 1:
            Less crowded slots get better score

            Example:
            3 booked -> better than 15 booked
        */

        score +=
            (slot.capacity - slot.booked) * 10;


        /*
            RULE 2:
            Crop-specific slot gets bonus priority
        */

        if (
            slot.crop.toLowerCase()
            ===
            farmerCrop.toLowerCase()
        ) {

            score += 100;

        }


        /*
            Save score temporarily
        */

        slot.recommendationScore = score;

    });


    /*
        STEP 3:
        Sort slots

        Priority:
        1. Higher recommendation score
        2. Earlier date
        3. Earlier slot ID
    */

    availableSlots.sort((a, b) => {

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


        const dateA =
            new Date(a.date);

        const dateB =
            new Date(b.date);


        if (dateA - dateB !== 0) {

            return dateA - dateB;

        }


        return a.id - b.id;

    });


    /*
        STEP 4:
        Get TOP 3 suggestions
    */

    const topSlots =
        availableSlots.slice(0, 3);


    /*
        STEP 5:
        Display suggestions
    */

    container.innerHTML = "";


    topSlots.forEach((slot, index) => {

        const card =
            document.createElement("div");

        card.className = "slot-card";


        let badgeText =
            index === 0
                ?
                "Recommended"
                :
                "Least Crowded";


        card.innerHTML = `

            <span class="badge">

                ${badgeText}

            </span>


            <h3>${slot.date}</h3>


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

                ${slot.booked}/${slot.capacity} booked

            </p>


            <button
                class="primary-btn">

                Select This Slot

            </button>

        `;


        card.onclick = () => {

            selectSlot(slot);

        };


        container.appendChild(card);

    });

}


/* =====================================================
   GENERATE UNIQUE BOOKING ID
===================================================== */

function generateBookingId() {

    return (
        "KISAN-"
        +
        Date.now()
            .toString()
            .slice(-6)
    );

}


/* =====================================================
   CONFIRM BOOKING
===================================================== */

function confirmBooking() {


    const name =
        document
            .getElementById("name")
            .value;

    const phone =
        document
            .getElementById("phone")
            .value;

    const farmerId =
        document
            .getElementById("farmerId")
            .value;

    const village =
        document
            .getElementById("village")
            .value;

    const crop =
        document
            .getElementById("crop")
            .value;

    const quantity =
        document
            .getElementById("quantity")
            .value;


    /*
        Validation
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
            "Please fill all farmer details first."
        );

        return;

    }


    if (!selectedSlot) {

        alert(
            "Please select a procurement slot."
        );

        return;

    }


    /*
        Check slot capacity
    */

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


    /*
        Generate booking ID
    */

    const bookingId =
        generateBookingId();


    /*
        Calculate queue position
    */

    const queuePosition =
        selectedSlot.booked + 1;


    /*
        Estimated wait time

        Approx 15 minutes per farmer
    */

    const estimatedWait =
        queuePosition * 15;


    /*
        Create booking object
    */

    const booking = {

        bookingId: bookingId,

        name: name,

        phone: phone,

        farmerId: farmerId,

        village: village,

        crop: crop,

        quantity: quantity,

        date: selectedSlot.date,

        time: selectedSlot.time,

        slotId: selectedSlot.id,

        queuePosition: queuePosition,

        estimatedWait:
            estimatedWait + " minutes",

        status: "Booking Confirmed",

        paymentStatus: "Pending"

    };


    /*
        Save booking
    */

    bookings.push(booking);


    localStorage.setItem(

        "bookings",

        JSON.stringify(bookings)

    );


    /*
        Update slot booking count
    */

    selectedSlot.booked++;


    /*
        SMS API INTEGRATION PLACEHOLDER

        Later integrate:

        - Twilio
        - MSG91
        - Government SMS Gateway

        Example:

        sendSMS(
            phone,
            "Your slot is confirmed. Token: "
            + bookingId
        );

    */


    /*
        Show success modal
    */

    document
        .getElementById("successMessage")
        .innerHTML = `

        <strong>Your Booking ID:</strong>

        ${bookingId}

        <br><br>

        <strong>Slot:</strong>

        ${booking.date}

        | ${booking.time}

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


    selectedSlot = null;


    displayAllSlots();

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


    const booking =
        bookings.find(b =>

            b.phone === searchValue
            ||
            b.bookingId === searchValue

        );


    const result =
        document
            .getElementById("trackingResult");


    if (!booking) {

        result.innerHTML = `

            <div class="tracking-card">

                <h2>No Booking Found</h2>

                <p>
                    Please check your phone number
                    or booking ID.
                </p>

            </div>

        `;

        return;

    }


    /*
        Status Steps
    */

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


    steps.forEach((step, index) => {

        let className =
            "timeline-step";


        if (index < currentIndex) {

            className += " completed";

        }

        else if (index === currentIndex) {

            className += " current";

        }


        timelineHTML += `

            <div class="${className}">

                ${step}

            </div>

        `;

    });


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
   ADMIN DASHBOARD
===================================================== */

function loadAdminDashboard() {


    const table =
        document
            .getElementById("adminTable");


    table.innerHTML = "";


    /*
        Sort bookings by slot date
    */

    bookings.sort((a, b) => {

        return new Date(a.date)
            -
            new Date(b.date);

    });


    bookings.forEach((booking, index) => {

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

    });


    updateStats();

}


/* =====================================================
   UPDATE BOOKING STATUS
===================================================== */

function updateStatus(index, newStatus) {

    bookings[index].status =
        newStatus;


    localStorage.setItem(

        "bookings",

        JSON.stringify(bookings)

    );


    loadAdminDashboard();

}


/* =====================================================
   UPDATE ADMIN STATISTICS
===================================================== */

function updateStats() {


    const total =
        bookings.length;


    const completed =
        bookings.filter(b =>

            b.status ===
            "Procurement Done"

            ||

            b.status ===
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

}


/* =====================================================
   INITIAL LOAD
===================================================== */

displayAllSlots();