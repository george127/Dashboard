        // ===== Navigation =====
const nav = document.querySelector('nav');

// Add a scroll event listener to the window
window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
    nav.classList.add('scrolled');
    } else {
    nav.classList.remove('scrolled');
    }
});
// ===== End Navigation =====

// ===== drop =====
const dropbtn = document.querySelectorAll(".dropbtn");

dropbtn.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
    event.preventDefault();
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.classList.toggle("expanded");
});

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
    if (!toggle.contains(event.target)) {
        toggle.nextElementSibling.classList.remove("expanded");
    }
    });
});
// ===== End drop =====

// ========== Pop-Up ===========
const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("myModal");
const closeModalButton = document.getElementById("closeModal");
const main = document.getElementById("main");

openModalButton.addEventListener("click", function() {
    modal.classList.add("show");
    modal.style.display = "flex";
    main.style.display = "none";
    setTimeout(() => {
        modal.querySelector(".modal-content").classList.add("show");
    }, 50);
});

closeModalButton.addEventListener("click", function() {
    modal.querySelector(".modal-content").classList.remove("show");
    setTimeout(() => {
        modal.classList.remove("show");
        modal.style.display = "none";
        main.style.display = "block";
    }, 300);
});

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.querySelector(".modal-content").classList.remove("show");
        setTimeout(() => {
            modal.classList.remove("show");
            modal.style.display = "none";
        }, 300);
    }
});
// ========== Pop-Up ===========


// ========== SideBar ===========
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");
    const cancel = document.getElementById("cancel");
    const sidebar = document.getElementById("sidebar");
    let isOpen = false;

    // Function to open the sidebar
    function openSidebar() {
        sidebar.style.right = "0";
        isOpen = true;
    }

    // Function to close the sidebar
    function closeSidebar() {
        sidebar.style.right = "-100%";
        isOpen = false;
    }

    btn.addEventListener("click", function () {
        if (!isOpen) {
            openSidebar();
        }
    });

    cancel.addEventListener("click", function () {
        if (isOpen) {
            closeSidebar();
        }
    });
});
// ========== End SideBar ===========

// ========== Msg-Bar ===========
document.addEventListener("DOMContentLoaded", function () {
    const msgbtn = document.getElementById("msg-btn");
    const msgcancel = document.getElementById("msg-cancel");
    const msgbar = document.getElementById("msg-bar");
    let isOpen = false;

    // Function to open the sidebar
    function openMsgbar() {
        sidebar.style.visibility = "hidden";
        sidebar.style.opacity = "0";
        msgbar.style.right = "0";
        isOpen = true;
    }

    // Function to close the sidebar
    function closeMsgbar() {
        sidebar.style.visibility = "visible";
        sidebar.style.opacity = "1";
        msgbar.style.right = "-100%";
        isOpen = false;
    }

    msgbtn.addEventListener("click", function () {
        if (!isOpen) {
            openMsgbar();
        }
    });

    msgcancel.addEventListener("click", function () {
        if (isOpen) {
            closeMsgbar();
        }
    });
});
// ========== End Msg-SideBar ===========

// ========== num ===========
document.addEventListener("DOMContentLoaded", function () {
    const numbtn = document.getElementById("num-btn");
    const numcancel = document.getElementById("num-cancel");
    const num = document.getElementById("num");
    let isOpen = false;

    // Function to open the sidebar
    function openNum() {
        sidebar.style.visibility = "hidden";
        sidebar.style.opacity = "0";
        num.style.right = "0";
        isOpen = true;
    }

    // Function to close the sidebar
    function closeNum() {
        sidebar.style.visibility = "visible";
        sidebar.style.opacity = "1";
        num.style.right = "-100%";
        isOpen = false;
    }

    numbtn.addEventListener("click", function () {
        if (!isOpen) {
            openNum();
        }
    });

    numcancel.addEventListener("click", function () {
        if (isOpen) {
            closeNum();
        }
    });
});
// ========== End num ===========

// ========== Search ===========
document.addEventListener("DOMContentLoaded", function () {
    const searchbtn = document.getElementById("search-btn");
    const searchcancel = document.getElementById("search-cancel");
    const search = document.getElementById("search");
    const sidebar = document.getElementById("sidebar");
    let isOpen = false;

    function open() {
        sidebar.style.visibility = "hidden";
        sidebar.style.opacity = "0";
        search.style.top = "0";
        search.style.opacity = "1";
        search.style.visibility = "visible";
        isOpen = true;
    }

    function close() {
        sidebar.style.visibility = "visible";
        sidebar.style.opacity = "1";

        search.style.top = "-100%";
        search.style.opacity = "0";
        search.style.visibility = "hidden";
        isOpen = false;
    }

    searchbtn.addEventListener("click", function () {
        if (!isOpen) {
            open();
        }
    });

    searchcancel.addEventListener("click", function () {
        if (isOpen) {
            close();
        }
    });
});
// ========== End Search ===========

// ========== Drop-down ===========
function toggleDropdown1() {
    var dropdown = document.querySelector('.drop1');
    dropdown.classList.toggle('active');
}
function toggleDropdown2() {
    var dropdown = document.querySelector('.drop2');
    dropdown.classList.toggle('active');
}

function toggleDropdown3() {
    var dropdown = document.querySelector('.drop3');
    dropdown.classList.toggle('active');
}
function toggleDropdown4() {
    var dropdown = document.querySelector('.drop4');
    dropdown.classList.toggle('active');
}

function toggleDropdown5() {
    var dropdown = document.querySelector('.drop5');
    dropdown.classList.toggle('active');
}
function toggleDropdown6() {
    var dropdown = document.querySelector('.drop6');
    dropdown.classList.toggle('active');
}

function toggleDropdown7() {
    var dropdown = document.querySelector('.drop7');
    dropdown.classList.toggle('active');
}
function toggleDropdown8() {
    var dropdown = document.querySelector('.drop8');
    dropdown.classList.toggle('active');
}

function toggleDropdown9() {
    var dropdown = document.querySelector('.drop9');
    dropdown.classList.toggle('active');
}
function toggleDropdown10() {
    var dropdown = document.querySelector('.drop10');
    dropdown.classList.toggle('active');
}

function toggleDropdown11() {
    var dropdown = document.querySelector('.drop11');
    dropdown.classList.toggle('active');
}

function toggleDropdown12() {
    var dropdown = document.querySelector('.drop12');
    dropdown.classList.toggle('active');
}

function toggleDropdown13() {
    var dropdown = document.querySelector('.drop13');
    dropdown.classList.toggle('active');
}
// ========== End Drop-down ===========

// ========= scroll animation ========
            const observe = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                  entry.target.classList.add('show');
                } else {
                  entry.target.classList.remove('show');
                }
              });
            });
          
            const hiddenElements = document.querySelectorAll('.anime');
            hiddenElements.forEach((el) => observe.observe(el));
  
//=======================================


// ===== GSAP animation One======
function animateElement1(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show1');
    }
  }
  // Set up the Intersection Observer
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement1(entry);
    });
  }, options);
  // Observe the target element
  const elementToAnimate = document.querySelector('.element1');
  observer.observe(elementToAnimate);
  //===================================================

// ===== GSAP animation Two======
function animateElement2(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show2');
    }
  }
  // Set up the Intersection Observer
  const options2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement2(entry);
    });
  }, options2);
  // Observe the target element
  const elementToAnimate2 = document.querySelector('.element2');
  observer2.observe(elementToAnimate2);
  //===================================================

  // ===== GSAP animation Three======
function animateElement3(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show3');
    }
  }
  // Set up the Intersection Observer
  const options3 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement3(entry);
    });
  }, options3);
  // Observe the target element
  const elementToAnimate3 = document.querySelector('.element3');
  observer3.observe(elementToAnimate3);
  //===================================================

// ===== GSAP animation Four======
function animateElement4(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show4');
    }
  }
  // Set up the Intersection Observer
  const options4 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement4(entry);
    });
  }, options4);
  // Observe the target element
  const elementToAnimate4 = document.querySelector('.element4');
  observer4.observe(elementToAnimate4);
  //===================================================

// ===== GSAP animation Five======
function animateElement5(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show5');
    }
  }
  // Set up the Intersection Observer
  const options5 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement5(entry);
    });
  }, options5);
  // Observe the target element
  const elementToAnimate5 = document.querySelector('.element5');
  observer5.observe(elementToAnimate5);
  //===================================================

// ===== GSAP animation Six======
function animateElement6(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show6');
    }
  }
  // Set up the Intersection Observer
  const options6 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement6(entry);
    });
  }, options6);
  // Observe the target element
  const elementToAnimate6 = document.querySelector('.element6');
  observer6.observe(elementToAnimate6);
  //===================================================

// ===== GSAP animation Seven ======
function animateElement7(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show7');
    }
  }
  // Set up the Intersection Observer
  const options7 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement7(entry);
    });
  }, options7);
  // Observe the target element
  const elementToAnimate7 = document.querySelector('.element7');
  observer7.observe(elementToAnimate7);
  //===================================================

// ===== GSAP animation Eight ======
function animateElement8(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show8');
    }
  }
  // Set up the Intersection Observer
  const options8 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer8 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement8(entry);
    });
  }, options8);
  // Observe the target element
  const elementToAnimate8 = document.querySelector('.element8');
  observer8.observe(elementToAnimate8);
  //===================================================

// ===== GSAP animation Nine ======
function animateElement9(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show9');
    }
  }
  // Set up the Intersection Observer
  const options9 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer9 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement9(entry);
    });
  }, options9);
  // Observe the target element
  const elementToAnimate9 = document.querySelector('.element9');
  observer9.observe(elementToAnimate9);
  //===================================================

// ===== GSAP animation Ten ======
function animateElement10(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show10');
    }
  }
  // Set up the Intersection Observer
  const options10 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer10 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement10(entry);
    });
  }, options10);
  // Observe the target element
  const elementToAnimate10 = document.querySelector('.element10');
  observer10.observe(elementToAnimate10);
  //===================================================

// ===== GSAP animation eleven ======
function animateElement11(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show11');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show11');
    }
  }
  // Set up the Intersection Observer
  const options11 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer11 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement11(entry);
    });
  }, options11);
  // Observe the target element
  const elementToAnimate11 = document.querySelector('.element11');
  observer11.observe(elementToAnimate11);
  //===================================================

// ===== GSAP animation Twelve ======
function animateElement12(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show11');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show12');
    }
  }
  // Set up the Intersection Observer
  const options12 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer12 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement12(entry);
    });
  }, options12);
  // Observe the target element
  const elementToAnimate12 = document.querySelector('.element12');
  observer12.observe(elementToAnimate12);
  //===================================================

// ===== GSAP animation Thirteen ======
function animateElement13(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show11');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show13');
    }
  }
  // Set up the Intersection Observer
  const options13 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer13 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement13(entry);
    });
  }, options13);
  // Observe the target element
  const elementToAnimate13 = document.querySelector('.element13');
  observer13.observe(elementToAnimate13);
  //===================================================

// ===== GSAP animation Fourteen ======
function animateElement14(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show11');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show14');
    }
  }
  // Set up the Intersection Observer
  const options14 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer14 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement14(entry);
    });
  }, options14);
  // Observe the target element
  const elementToAnimate14 = document.querySelector('.element14');
  observer14.observe(elementToAnimate14);
  //===================================================

// ===== GSAP animation Fiftteen ======
function animateElement15(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show11');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show15');
    }
  }
  // Set up the Intersection Observer
  const options15 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer15 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement15(entry);
    });
  }, options15);
  // Observe the target element
  const elementToAnimate15 = document.querySelector('.element15');
  observer15.observe(elementToAnimate15);
  //===================================================




