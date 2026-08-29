/* =====================================================
   KISAN PROCUREMENT PORTAL
   FRONTEND DEMO
   BILINGUAL: ENGLISH / HINDI
===================================================== */


/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

let currentLanguage =
    localStorage.getItem("kisanLanguage") || "en";


const translations = {

    en: {

        home: "Home",
        farmerPortal: "Farmer Portal",
        sellCrop: "Sell Crop",
        track: "Track",
        admin: "Admin",

        governmentService: "Government Procurement Service",

        directAccess:
            "Direct and transparent access to government procurement services for farmers.",

        adminPortal: "Admin Portal",

        smartSlot: "Smart Slot Booking",
        smartSlotDesc:
            "Book procurement slots without long queues.",

        centreRecommendation: "Centre Recommendation",
        centreRecommendationDesc:
            "Get nearby procurement centre suggestions.",

        cropSelling: "Crop Selling",
        cropSellingDesc:
            "List your crop for government procurement.",

        governmentPrice: "Government Price",
        governmentPriceDesc:
            "View applicable government procurement price.",

        farmerRegistration:
            "Farmer Registration & Slot Booking",

        farmerDetails: "Farmer Details",

        farmerName: "Farmer Name",
        mobileNumber: "Mobile Number",
        aadhaarNumber: "Aadhaar Number",
        village: "Village",
        cropType: "Crop Type",
        expectedQuantity: "Expected Quantity",

        enterFarmerName:
            "Enter farmer name",

        enterMobile:
            "Enter 10 digit mobile number",

        enterAadhaar:
            "Enter 12 digit Aadhaar number",

        enterVillage:
            "Enter village name",

        selectCrop:
            "Select Crop",

        quantityPlaceholder:
            "Quantity in quintal",

        exactly10:
            "Exactly 10 digits required.",

        exactly12:
            "Exactly 12 digits required.",

        nearbyCentres:
            "Nearby Procurement Centres",

        enterVillageRecommendation:
            "Enter your village to receive recommended procurement centres.",

        enterVillageMessage:
            "Enter village name to get centre recommendations.",

        smartSuggestions:
            "Smart Slot Suggestions",

        slotRecommendationText:
            "Slots are recommended according to crop and availability.",

        selectCropQuantity:
            "Select crop and quantity to get slot recommendations.",

        availableSlots:
            "Available Procurement Slots",

        selectedSlot:
            "Selected Slot",

        noSlotSelected:
            "No slot selected.",

        confirmBooking:
            "Confirm Booking",

        time:
            "Time",

        crop:
            "Crop",

        bookings:
            "Bookings",

        available:
            "Available",

        full:
            "Full",

        recommended:
            "Recommended",

        alternative:
            "Alternative",

        selectThisSlot:
            "Select This Slot",

        centreId:
            "Centre ID",

        area:
            "Area",

        distance:
            "Approx. Distance",

        capacity:
            "Capacity",

        farmersDay:
            "farmers/day",

        cropSellingTitle:
            "List Your Crop",

        cropSellingHindi:
            "अपनी फसल सरकारी खरीद के लिए सूचीबद्ध करें।",

        cropDetails:
            "Crop Details",

        quantityQuintal:
            "Quantity (Quintal)",

        enterQuantity:
            "Enter quantity",

        listCrop:
            "List Crop for Procurement",

        myListedCrops:
            "My Listed Crops",

        noCrops:
            "No crops listed yet.",

        tracking:
            "Tracking",

        trackBooking:
            "Track Your Booking",

        trackDescription:
            "Check your status using Booking ID or mobile number.",

        bookingInput:
            "Enter Booking ID or Mobile Number",

        checkStatus:
            "Check Status",

        noBooking:
            "No Booking Found",

        checkBooking:
            "Please check your Booking ID or mobile number.",

        bookingDetails:
            "Booking Details",

        farmer:
            "Farmer",

        bookingId:
            "Booking ID",

        quantity:
            "Quantity",

        slot:
            "Slot",

        queuePosition:
            "Queue Position",

        estimatedWait:
            "Estimated Wait",

        currentStatus:
            "Current Status",

        bookingConfirmed:
            "Booking Confirmed",

        arrived:
            "Arrived",

        qualityChecked:
            "Quality Checked",

        procurementDone:
            "Procurement Done",

        paymentProcessed:
            "Payment Processed",

        adminTitle:
            "Procurement Centre Administration",

        centreAdministration:
            "Procurement Centre Administration",

        centreLogin:
            "Centre ID",

        enterCentre:
            "Enter Centre ID",

        password:
            "Password",

        enterPassword:
            "Enter password",

        login:
            "Login",

        demoLogin:
            "Demo Login",

        invalidLogin:
            "Invalid Centre ID or password.",

        adminDashboard:
            "Procurement Centre Dashboard",

        loggedInAs:
            "Logged in as:",

        logout:
            "Logout",

        totalBookings:
            "Total Bookings",

        completed:
            "Completed",

        pending:
            "Pending",

        cropListings:
            "Crop Listings",

        farmerBookings:
            "Farmer Bookings",

        phone:
            "Phone",

        action:
            "Action",

        quality:
            "Quality",

        done:
            "Done",

        payment:
            "Payment",

        farmerCropListings:
            "Farmer Crop Listings",

        governmentProcurementPrice:
            "Government Procurement Price",

        listedForProcurement:
            "Listed for Procurement",

        noBookings:
            "No bookings available.",

        noCropListings:
            "No crop listings available.",

        bookingConfirmedMessage:
            "Your procurement booking has been confirmed.",

        continue:
            "Continue",

        governmentPriceSelect:
            "Select a crop to view government procurement price.",

        demoValue:
            "Demo value — connect with the official government price database/API before production deployment.",

        mobileError:
            "Mobile number must contain exactly 10 digits.",

        aadhaarError:
            "Aadhaar number must contain exactly 12 digits.",

        fillFarmer:
            "Please fill all farmer details.",

        quantityError:
            "Quantity must be greater than zero.",

        selectSlot:
            "Please select a procurement slot.",

        slotFull:
            "Sorry, this slot is already full.",

        fillCrop:
            "Please fill all crop details.",

        cropListed:
            "Crop successfully listed for government procurement.",

        enterBooking:
            "Please enter Booking ID or mobile number.",

        paymentPending:
            "Pending",

        noRecommendation:
            "Enter village name to get procurement centre recommendations."

    },


    hi: {

        home: "होम",
        farmerPortal: "किसान पोर्टल",
        sellCrop: "फसल बेचें",
        track: "ट्रैक करें",
        admin: "एडमिन",

        governmentService: "सरकारी खरीद सेवा",

        directAccess:
            "किसानों के लिए सरकारी खरीद सेवाओं तक सीधी और पारदर्शी पहुंच।",

        adminPortal: "एडमिन पोर्टल",

        smartSlot: "स्मार्ट स्लॉट बुकिंग",
        smartSlotDesc:
            "लंबी कतारों के बिना खरीद स्लॉट बुक करें।",

        centreRecommendation: "केंद्र की सिफारिश",
        centreRecommendationDesc:
            "अपने नजदीकी खरीद केंद्र की जानकारी प्राप्त करें।",

        cropSelling: "फसल बिक्री",
        cropSellingDesc:
            "अपनी फसल को सरकारी खरीद के लिए सूचीबद्ध करें।",

        governmentPrice: "सरकारी मूल्य",
        governmentPriceDesc:
            "लागू सरकारी खरीद मूल्य देखें।",

        farmerRegistration:
            "किसान पंजीकरण और स्लॉट बुकिंग",

        farmerDetails: "किसान विवरण",

        farmerName: "किसान का नाम",
        mobileNumber: "मोबाइल नंबर",
        aadhaarNumber: "आधार नंबर",
        village: "गांव",
        cropType: "फसल का प्रकार",
        expectedQuantity: "अनुमानित मात्रा",

        enterFarmerName:
            "किसान का नाम दर्ज करें",

        enterMobile:
            "10 अंकों का मोबाइल नंबर दर्ज करें",

        enterAadhaar:
            "12 अंकों का आधार नंबर दर्ज करें",

        enterVillage:
            "गांव का नाम दर्ज करें",

        selectCrop:
            "फसल चुनें",

        quantityPlaceholder:
            "क्विंटल में मात्रा",

        exactly10:
            "ठीक 10 अंक आवश्यक हैं।",

        exactly12:
            "ठीक 12 अंक आवश्यक हैं।",

        nearbyCentres:
            "नजदीकी खरीद केंद्र",

        enterVillageRecommendation:
            "अनुशंसित खरीद केंद्र प्राप्त करने के लिए अपना गांव दर्ज करें।",

        enterVillageMessage:
            "खरीद केंद्र की सिफारिश प्राप्त करने के लिए गांव का नाम दर्ज करें।",

        smartSuggestions:
            "स्मार्ट स्लॉट सुझाव",

        slotRecommendationText:
            "फसल और उपलब्धता के आधार पर स्लॉट सुझाए जाते हैं।",

        selectCropQuantity:
            "स्लॉट सुझाव प्राप्त करने के लिए फसल और मात्रा चुनें।",

        availableSlots:
            "उपलब्ध खरीद स्लॉट",

        selectedSlot:
            "चयनित स्लॉट",

        noSlotSelected:
            "कोई स्लॉट चयनित नहीं है।",

        confirmBooking:
            "बुकिंग की पुष्टि करें",

        time:
            "समय",

        crop:
            "फसल",

        bookings:
            "बुकिंग",

        available:
            "उपलब्ध",

        full:
            "पूर्ण",

        recommended:
            "अनुशंसित",

        alternative:
            "वैकल्पिक",

        selectThisSlot:
            "यह स्लॉट चुनें",

        centreId:
            "केंद्र आईडी",

        area:
            "क्षेत्र",

        distance:
            "लगभग दूरी",

        capacity:
            "क्षमता",

        farmersDay:
            "किसान/दिन",

        cropSellingTitle:
            "अपनी फसल सूचीबद्ध करें",

        cropSellingHindi:
            "अपनी फसल सरकारी खरीद के लिए सूचीबद्ध करें।",

        cropDetails:
            "फसल विवरण",

        quantityQuintal:
            "मात्रा (क्विंटल)",

        enterQuantity:
            "मात्रा दर्ज करें",

        listCrop:
            "सरकारी खरीद के लिए फसल सूचीबद्ध करें",

        myListedCrops:
            "मेरी सूचीबद्ध फसलें",

        noCrops:
            "अभी कोई फसल सूचीबद्ध नहीं है।",

        tracking:
            "ट्रैकिंग",

        trackBooking:
            "अपनी बुकिंग ट्रैक करें",

        trackDescription:
            "बुकिंग आईडी या मोबाइल नंबर से अपनी स्थिति देखें।",

        bookingInput:
            "बुकिंग आईडी या मोबाइल नंबर दर्ज करें",

        checkStatus:
            "स्थिति देखें",

        noBooking:
            "कोई बुकिंग नहीं मिली",

        checkBooking:
            "कृपया अपनी बुकिंग आईडी या मोबाइल नंबर जांचें।",

        bookingDetails:
            "बुकिंग विवरण",

        farmer:
            "किसान",

        bookingId:
            "बुकिंग आईडी",

        quantity:
            "मात्रा",

        slot:
            "स्लॉट",

        queuePosition:
            "कतार में स्थान",

        estimatedWait:
            "अनुमानित प्रतीक्षा",

        currentStatus:
            "वर्तमान स्थिति",

        bookingConfirmed:
            "बुकिंग की पुष्टि हो गई",

        arrived:
            "केंद्र पर पहुंचे",

        qualityChecked:
            "गुणवत्ता जांच",

        procurementDone:
            "खरीद पूरी हुई",

        paymentProcessed:
            "भुगतान संसाधित",

        adminTitle:
            "खरीद केंद्र प्रशासन",

        centreAdministration:
            "खरीद केंद्र प्रशासन",

        centreLogin:
            "केंद्र आईडी",

        enterCentre:
            "केंद्र आईडी दर्ज करें",

        password:
            "पासवर्ड",

        enterPassword:
            "पासवर्ड दर्ज करें",

        login:
            "लॉगिन",

        demoLogin:
            "डेमो लॉगिन",

        invalidLogin:
            "गलत केंद्र आईडी या पासवर्ड।",

        adminDashboard:
            "खरीद केंद्र डैशबोर्ड",

        loggedInAs:
            "लॉगिन किया गया:",

        logout:
            "लॉगआउट",

        totalBookings:
            "कुल बुकिंग",

        completed:
            "पूर्ण",

        pending:
            "लंबित",

        cropListings:
            "फसल सूची",

        farmerBookings:
            "किसान बुकिंग",

        phone:
            "मोबाइल",

        action:
            "कार्रवाई",

        quality:
            "गुणवत्ता",

        done:
            "पूर्ण",

        payment:
            "भुगतान",

        farmerCropListings:
            "किसानों की फसल सूची",

        governmentProcurementPrice:
            "सरकारी खरीद मूल्य",

        listedForProcurement:
            "खरीद के लिए सूचीबद्ध",

        noBookings:
            "कोई बुकिंग उपलब्ध नहीं है।",

        noCropListings:
            "कोई फसल सूची उपलब्ध नहीं है।",

        bookingConfirmedMessage:
            "आपकी सरकारी खरीद बुकिंग की पुष्टि हो गई है।",

        continue:
            "जारी रखें",

        governmentPriceSelect:
            "सरकारी खरीद मूल्य देखने के लिए फसल चुनें।",

        demoValue:
            "डेमो मूल्य — प्रोडक्शन से पहले आधिकारिक सरकारी मूल्य डेटाबेस/API से कनेक्ट करें।",

        mobileError:
            "मोबाइल नंबर में ठीक 10 अंक होने चाहिए।",

        aadhaarError:
            "आधार नंबर में ठीक 12 अंक होने चाहिए।",

        fillFarmer:
            "कृपया किसान का पूरा विवरण भरें।",

        quantityError:
            "मात्रा शून्य से अधिक होनी चाहिए।",

        selectSlot:
            "कृपया खरीद स्लॉट चुनें।",

        slotFull:
            "क्षमा करें, यह स्लॉट पहले से पूर्ण है।",

        fillCrop:
            "कृपया फसल का पूरा विवरण भरें।",

        cropListed:
            "फसल सफलतापूर्वक सरकारी खरीद के लिए सूचीबद्ध हो गई।",

        enterBooking:
            "कृपया बुकिंग आईडी या मोबाइल नंबर दर्ज करें।",

        paymentPending:
            "लंबित",

        noRecommendation:
            "खरीद केंद्र की सिफारिश प्राप्त करने के लिए गांव का नाम दर्ज करें।"

    }

};


/* =====================================================
   LANGUAGE HELPER
===================================================== */

function t(key) {

    return (
        translations[currentLanguage] &&
        translations[currentLanguage][key]
    )
    ||
    translations.en[key]
    ||
    key;

}


/* =====================================================
   LANGUAGE SWITCH
===================================================== */

function toggleLanguage() {

    currentLanguage =
        currentLanguage === "en"
            ? "hi"
            : "en";

    localStorage.setItem(
        "kisanLanguage",
        currentLanguage
    );

    applyLanguage();

}


function applyLanguage() {

    /*
       Static elements
    */

    const elements =
        document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key =
            element.getAttribute("data-i18n");

        if (key) {

            element.innerText =
                t(key);

        }

    });


    /*
       Placeholders
    */

    const placeholders =
        document.querySelectorAll("[data-i18n-placeholder]");

    placeholders.forEach(element => {

        const key =
            element.getAttribute(
                "data-i18n-placeholder"
            );

        element.placeholder =
            t(key);

    });


    /*
       Language button
    */

    const languageButton =
        document.getElementById(
            "languageToggle"
        );

    if (languageButton) {

        languageButton.innerHTML =
            currentLanguage === "en"
                ? "हिंदी"
                : "English";

    }


    /*
       Refresh dynamic content
    */

    displayAllSlots();

    displayCropListings();

    updateFarmerRecommendations();

    if (
        document
            .getElementById("governmentPriceBox")
    ) {

        showGovernmentPrice();

    }


    if (adminLoggedIn) {

        loadAdminDashboard();

    }

}


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
    sessionStorage.getItem(
        "kisanAdminLoggedIn"
    ) === "true";

let loggedCenter =
    sessionStorage.getItem(
        "kisanCenter"
    ) || "";


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

function allowOnlyDigits(
    inputId,
    maxLength
) {

    const input =
        document.getElementById(inputId);

    if (!input) return;


    input.addEventListener(
        "input",
        function () {

            this.value =
                this.value
                    .replace(/\D/g, "")
                    .slice(0, maxLength);

        }
    );

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

    const villageElement =
        document.getElementById("village");

    const container =
        document.getElementById(
            "centreRecommendations"
        );


    if (!villageElement || !container) return;


    const village =
        villageElement.value.trim();


    if (!village) {

        container.innerHTML = `

            <div class="info-message">
                ${t("enterVillageMessage")}
            </div>

        `;

        return;

    }


    const normalizedVillage =
        village.toLowerCase();


    let startIndex = 0;


    for (
        let i = 0;
        i < normalizedVillage.length;
        i++
    ) {

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


    recommended.forEach(
        (centre, index) => {

            const card =
                document.createElement("div");

            card.className =
                "centre-card " +
                (
                    index === 0
                        ? "recommended"
                        : ""
                );


            card.innerHTML = `

                ${
                    index === 0
                    ?
                    `
                    <span class="recommended-label">
                        ${t("recommended")}
                    </span>
                    `
                    :
                    ""
                }

                <h3>
                    ${centre.name}
                </h3>

                <p>
                    <strong>
                        ${t("centreId")}:
                    </strong>
                    ${centre.id}
                </p>

                <p>
                    <strong>
                        ${t("area")}:
                    </strong>
                    ${centre.villageArea}
                </p>

                <p>
                    <strong>
                        ${t("distance")}:
                    </strong>
                    ${centre.distance}
                </p>

                <p>
                    <strong>
                        ${t("capacity")}:
                    </strong>
                    ${centre.capacity}
                    ${t("farmersDay")}
                </p>

            `;


            container.appendChild(card);

        }
    );

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
                <strong>
                    ${t("time")}:
                </strong>
                ${slot.time}
            </p>

            <p>
                <strong>
                    ${t("crop")}:
                </strong>
                ${slot.crop}
            </p>

            <p>
                <strong>
                    ${t("bookings")}:
                </strong>
                ${slot.booked}/${slot.capacity}
            </p>

            ${
                isFull
                ?
                `
                <span class="badge">
                    ${t("full")}
                </span>
                `
                :
                `
                <span class="badge">
                    ${t("available")}
                </span>
                `
            }

        `;


        if (!isFull) {

            card.onclick =
                function () {

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
        .getElementById(
            "selectedSlotText"
        )
        .innerHTML = `

        <strong>
            ${t("time")}:
        </strong>
        ${slot.time}

        <br>

        <strong>
            ${t("crop")}:
        </strong>
        ${slot.crop}

        <br>

        <strong>
            ${t("bookings")}:
        </strong>
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
        document.getElementById(
            "recommendedSlots"
        );


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
                ${t("selectCropQuantity")}
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


        if (
            slot.crop.toLowerCase()
            ===
            farmerCrop.toLowerCase()
        ) {

            score += 100;

        }


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
                        t("recommended")
                        :
                        t("alternative")
                    }
                </span>

                <h3>
                    ${slot.date}
                </h3>

                <p>
                    <strong>
                        ${t("time")}:
                    </strong>
                    ${slot.time}
                </p>

                <p>
                    <strong>
                        ${t("crop")}:
                    </strong>
                    ${slot.crop}
                </p>

                <p>
                    <strong>
                        ${t("bookings")}:
                    </strong>
                    ${slot.booked}/${slot.capacity}
                </p>

                <button
                    class="primary-btn"
                    type="button">

                    ${t("selectThisSlot")}

                </button>

            `;


            card.onclick =
                function () {

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


    if (
        !name ||
        !phone ||
        !farmerId ||
        !village ||
        !crop ||
        !quantity
    ) {

        alert(t("fillFarmer"));

        return;

    }


    if (!isValidMobile(phone)) {

        alert(t("mobileError"));

        document
            .getElementById("phone")
            .focus();

        return;

    }


    if (!isValidAadhaar(farmerId)) {

        alert(t("aadhaarError"));

        document
            .getElementById("farmerId")
            .focus();

        return;

    }


    if (
        Number(quantity) <= 0
    ) {

        alert(t("quantityError"));

        return;

    }


    if (!selectedSlot) {

        alert(t("selectSlot"));

        return;

    }


    if (
        selectedSlot.booked
        >=
        selectedSlot.capacity
    ) {

        alert(t("slotFull"));

        displayAllSlots();

        return;

    }


    const villageCentre =
        getRecommendedCentre(village);


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


    document
        .getElementById(
            "successMessage"
        )
        .innerHTML = `

        <strong>
            ${t("bookingId")}:
        </strong>
        ${bookingId}

        <br><br>

        <strong>
            ${t("centreId")}:
        </strong>
        ${villageCentre.name}

        <br><br>

        <strong>
            ${t("slot")}:
        </strong>
        ${booking.date}
        |
        ${booking.time}

        <br><br>

        <strong>
            ${t("queuePosition")}:
        </strong>
        ${queuePosition}

    `;


    document
        .getElementById(
            "successModal"
        )
        .classList.add("show");


    document
        .getElementById(
            "farmerForm"
        )
        .reset();


    selectedSlot = null;


    document
        .getElementById(
            "selectedSlotText"
        )
        .innerText =
        t("noSlotSelected");


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
        .getElementById(
            "successModal"
        )
        .classList.remove("show");


    showPage("track");

}


/* =====================================================
   TRACK BOOKING
===================================================== */

function trackBooking() {

    const searchValue =
        document
            .getElementById(
                "searchBooking"
            )
            .value
            .trim();


    const result =
        document
            .getElementById(
                "trackingResult"
            );


    if (!searchValue) {

        alert(t("enterBooking"));

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
                    ${t("noBooking")}
                </h2>

                <p>
                    ${t("checkBooking")}
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


    const translatedSteps = [

        t("bookingConfirmed"),
        t("arrived"),
        t("qualityChecked"),
        t("procurementDone"),
        t("paymentProcessed")

    ];


    let currentIndex =
        steps.indexOf(
            booking.status
        );


    if (currentIndex < 0) {

        currentIndex = 0;

    }


    let timelineHTML = "";


    translatedSteps.forEach(
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
                ${t("bookingDetails")}
            </h2>

            <br>

            <p>
                <strong>
                    ${t("farmer")}:
                </strong>
                ${booking.name}
            </p>

            <p>
                <strong>
                    ${t("bookingId")}:
                </strong>
                ${booking.bookingId}
            </p>

            <p>
                <strong>
                    ${t("centreId")}:
                </strong>
                ${booking.centreName}
            </p>

            <p>
                <strong>
                    ${t("village")}:
                </strong>
                ${booking.village}
            </p>

            <p>
                <strong>
                    ${t("crop")}:
                </strong>
                ${booking.crop}
            </p>

            <p>
                <strong>
                    ${t("quantity")}:
                </strong>
                ${booking.quantity} quintal
            </p>

            <p>
                <strong>
                    ${t("slot")}:
                </strong>
                ${booking.date}
                |
                ${booking.time}
            </p>

            <p>
                <strong>
                    ${t("queuePosition")}:
                </strong>
                ${booking.queuePosition}
            </p>

            <p>
                <strong>
                    ${t("estimatedWait")}:
                </strong>
                ${booking.estimatedWait}
            </p>

            <p>
                <strong>
                    ${t("currentStatus")}:
                </strong>
                ${
                    currentLanguage === "hi"
                    ?
                    translatedSteps[currentIndex]
                    :
                    booking.status
                }
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

    const cropElement =
        document.getElementById("sellCrop");

    const box =
        document.getElementById(
            "governmentPriceBox"
        );


    if (!cropElement || !box) return;


    const crop =
        cropElement.value;


    if (!crop) {

        box.innerHTML =
            t("governmentPriceSelect");

        return;

    }


    const price =
        governmentPrices[crop];


    box.innerHTML = `

        <div>
            ${t("governmentProcurementPrice")}
        </div>

        <div class="price-value">
            ₹${price.toLocaleString("en-IN")}
            <small> / ${currentLanguage === "hi" ? "क्विंटल" : "quintal"}</small>
        </div>

        <small>
            ${t("demoValue")}
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

        alert(t("mobileError"));

        return;

    }


    if (
        !name ||
        !crop ||
        !quantity ||
        !village
    ) {

        alert(t("fillCrop"));

        return;

    }


    if (quantity <= 0) {

        alert(t("quantityError"));

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


    alert(t("cropListed"));


    document
        .getElementById("cropForm")
        .reset();


    document
        .getElementById(
            "governmentPriceBox"
        )
        .innerText =
        t("governmentPriceSelect");


    displayCropListings();

}


/* =====================================================
   DISPLAY CROP LISTINGS
===================================================== */

function displayCropListings() {

    const container =
        document.getElementById(
            "listedCrops"
        );


    if (!container) return;


    if (
        cropListings.length === 0
    ) {

        container.innerHTML = `

            <p class="info-message">
                ${t("noCrops")}
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
                        ${
                            currentLanguage === "hi"
                            ?
                            t("listedForProcurement")
                            :
                            listing.status
                        }
                    </span>

                    <h3>
                        ${listing.crop}
                    </h3>

                    <p>
                        <strong>
                            ${t("farmer")}:
                        </strong>
                        ${listing.name}
                    </p>

                    <p>
                        <strong>
                            ${t("quantity")}:
                        </strong>
                        ${listing.quantity}
                        ${
                            currentLanguage === "hi"
                            ?
                            " क्विंटल"
                            :
                            " quintal"
                        }
                    </p>

                    <p>
                        <strong>
                            ${t("village")}:
                        </strong>
                        ${listing.village}
                    </p>

                    <p>
                        <strong>
                            ${t("governmentPrice")}:
                        </strong>
                        ₹${listing.governmentPrice.toLocaleString("en-IN")}
                        / ${
                            currentLanguage === "hi"
                            ?
                            "क्विंटल"
                            :
                            "quintal"
                        }
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
            t("loggedInAs") +
            " " +
            centerId;


        showPage("adminDashboard");

    }

    else {

        alert(t("invalidLogin"));

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
        t("loggedInAs") +
        " " +
        loggedCenter;


    const table =
        document.getElementById(
            "adminTable"
        );


    table.innerHTML = "";


    if (
        bookings.length === 0
    ) {

        table.innerHTML = `

            <tr>

                <td colspan="8">
                    ${t("noBookings")}
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
                    ${
                        currentLanguage === "hi"
                        ?
                        getHindiStatus(
                            booking.status
                        )
                        :
                        booking.status
                    }
                </td>

                <td>

                    <button
                        class="action-btn"
                        onclick="updateStatus(${index}, 'Arrived')">

                        ${t("arrived")}

                    </button>

                    <button
                        class="action-btn"
                        onclick="updateStatus(${index}, 'Quality Checked')">

                        ${t("quality")}

                    </button>

                    <button
                        class="action-btn"
                        onclick="updateStatus(${index}, 'Procurement Done')">

                        ${t("done")}

                    </button>

                    <button
                        class="action-btn"
                        onclick="updateStatus(${index}, 'Payment Processed')">

                        ${t("payment")}

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
   HINDI STATUS
===================================================== */

function getHindiStatus(status) {

    const map = {

        "Booking Confirmed":
            "बुकिंग की पुष्टि",

        "Arrived":
            "केंद्र पर पहुंचे",

        "Quality Checked":
            "गुणवत्ता जांच",

        "Procurement Done":
            "खरीद पूरी हुई",

        "Payment Processed":
            "भुगतान संसाधित"

    };


    return map[status] || status;

}


/* =====================================================
   UPDATE STATUS
===================================================== */

function updateStatus(
    index,
    newStatus
) {

    if (!bookings[index]) return;


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
        document.getElementById(
            "adminCropTable"
        );


    if (!table) return;


    table.innerHTML = "";


    if (
        cropListings.length === 0
    ) {

        table.innerHTML = `

            <tr>

                <td colspan="7">
                    ${t("noCropListings")}
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
                    ${
                        currentLanguage === "hi"
                        ?
                        " क्विंटल"
                        :
                        " quintal"
                    }
                </td>

                <td>
                    ${listing.village}
                </td>

                <td>
                    ₹${listing.governmentPrice.toLocaleString("en-IN")}
                    / ${
                        currentLanguage === "hi"
                        ?
                        "क्विंटल"
                        :
                        "quintal"
                    }
                </td>

                <td>
                    ${
                        currentLanguage === "hi"
                        ?
                        t("listedForProcurement")
                        :
                        listing.status
                    }
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
        .getElementById(
            "totalBookings"
        )
        .innerText =
        total;


    document
        .getElementById(
            "completedBookings"
        )
        .innerText =
        completed;


    document
        .getElementById(
            "pendingBookings"
        )
        .innerText =
        pending;


    document
        .getElementById(
            "totalCropListings"
        )
        .innerText =
        cropListings.length;

}


/* =====================================================
   INITIAL LOAD
===================================================== */

displayAllSlots();

displayCropListings();


if (adminLoggedIn) {

    const centerElement =
        document.getElementById(
            "loggedCenter"
        );


    if (centerElement) {

        centerElement.innerText =
            t("loggedInAs") +
            " " +
            loggedCenter;

    }

}


applyLanguage();
