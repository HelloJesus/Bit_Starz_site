const sidebarListItemsUl = document.querySelectorAll('.bs-c-site-sidebar__list-item-ul')
const sedibarWrapper = document.querySelector('.bs-c-site-sidebar__wrap')
const menuSidebar = document.querySelector('.bs-c-site-sidebar')
const menuNavbarBtn = document.querySelector('.navbar__menu')
const siteContainer = document.querySelector('.bs-site-container')
const mobileMenuNavbarCloseButtons = document.querySelectorAll('.mobile-menu-header__button--close')
const mobileMenuNavbarBtnBack = document.querySelector('.mobile-menu-header__button--back')
const mobileMenuOverlay = document.querySelector('.bs-c-sidebar__overlay')
const mobileSublist = document.querySelector('.bs-c-site-sidebar__sublist-header')
const mobileMenuHeaderTitle = document.querySelector('.mobile-menu-header__title')
let sidebarListItemsUlItem

if (sidebarListItemsUl) {
    sidebarListItemsUl.forEach(item => item.addEventListener('click', event => sidebarListItemsUlClick(event, item, false)))
}
function sidebarListItemsUlClick(event, sidebarListItemUl = null, statusBtnBack) {
    if (event && !event.target.closest('.bs-c-site-sidebar__list-link')) return

    if (sidebarListItemUl) {
        sidebarListItemsUlItem = sidebarListItemUl
    }
    // sidebarListItemsUlItem = sidebarListItemUl ?? sidebarListItemsUlItem
    let newList = sidebarListItemsUlItem.querySelector('.bs-c-site-sidebar__sublist').innerHTML
    let sidebarListText = sidebarListItemsUlItem.querySelector('.bs-c-site-sidebar__list-text').innerText

    mobileMenuHeaderTitle.innerText = sidebarListText
    mobileSublist.innerHTML = newList
    sidebarListItemsUlItem.classList.toggle('open')
    sidebarListItemsUlItem.querySelector('.bs-c-site-sidebar__list-link').classList.toggle('is-active')

    function menuClassListsToggle(action, newList = null, mobileSublistClass, menuSudebar) {
        if (action === 'add') {
            mobileSublist.innerHTML = newList
            mobileSublist.classList.add('active')
            menuSidebar.classList.add('mobile-table-hide')
        } else {
            mobileSublist.innerHTML = ''
            mobileSublist.classList.remove('active')
            menuSidebar.classList.remove('mobile-table-hide')
        }
    }

    if (sidebarListItemsUlItem.classList.contains('open') && statusBtnBack === false) {
        menuClassListsToggle('add', newList, 'active', 'mobile-table-hide')
    } else if (!sidebarListItemsUlItem.classList.contains('open') && statusBtnBack === false) {
        menuClassListsToggle('remove', null, 'active', 'mobile-table-hide')
    } else if (!mobileSublist.classList.contains('active') || statusBtnBack === true) {
        if (statusBtnBack === true) {
            sidebarListItemsUl.forEach(item => {
                item.classList.remove('open')
                item.querySelector('.bs-c-site-sidebar__list-link').classList.remove('is-active')
            })
        }
        menuClassListsToggle('remove', null, 'active', 'mobile-table-hide')
    }

}

// OPEN MENU
menuNavbarBtn.addEventListener('click', toggleMenuNavbar)
mobileMenuNavbarCloseButtons.forEach(btn => btn.addEventListener('click', toggleMenuNavbar))
mobileMenuOverlay.addEventListener('click', toggleMenuNavbar)
if (mobileMenuNavbarBtnBack) {
    mobileMenuNavbarBtnBack.addEventListener('click', toggleMenuNavbar)
}


function toggleMenuNavbar() {
    if (this.classList.contains('mobile-menu-header__button--back')) {
        sidebarListItemsUlClick(null, null, true)
    } else {
        menuSidebar.classList.toggle('visible')
        menuNavbarBtn.classList.toggle('is-open')
        siteContainer && siteContainer.classList.toggle('is-sidebar-visible')
        mobileMenuOverlay.classList.toggle('visible')
    }
}


// GAMES SWIPER
let swiper = new Swiper("#originalGames", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--originals",
        prevEl: ".swiper-button-prev--originals",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

let swiperStreamerGames = new Swiper("#StreamersGames", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--streamer",
        prevEl: ".swiper-button-prev--streamer",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

let swiperPromotions = new Swiper("#swiperPromotions", {
    slidesPerView: 'auto',
    freeMode: true,
    // autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--promotions",
        prevEl: ".swiper-button-prev--promotions",
    },
    breakpoints: {
        // 1025: {
        //     freeMode: true,
        //     slidesPerView: 'auto'
        // },
        1350: {
            freeMode: false,
            slidesPerView: 4,
            // slidesPerGroup: 4,
        }
    }
});


let swiperTopGames = new Swiper("#swiperTopGames", {
    slidesPerView: 'auto',
    freeMode: true,

    grid: {
        fill: 'row',
        rows: 1,
    },

    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: {
                rows: 2,
            }
        }
    },
    navigation: {
        nextEl: ".swiper-button-next--top-games",
        prevEl: ".swiper-button-prev--top-games",
    },
});


let swiperTrendingGames = new Swiper("#swiperTrendingGames", {
    slidesPerView: 'auto',
    freeMode: true,

    grid: {
        fill: 'row',
        rows: 1,
    },

    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: {
                rows: 2,
            }
        }
    },
    navigation: {
        nextEl: ".swiper-button-next--trending-games",
        prevEl: ".swiper-button-prev--trending-games",
    },
});

let swiperNewGames = new Swiper("#swiperNewGames", {
    slidesPerView: 'auto',
    freeMode: true,

    grid: {
        fill: 'row',
        rows: 1,
    },

    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: {
                rows: 2,
            }
        }
    },
    navigation: {
        nextEl: ".swiper-button-next--new-games",
        prevEl: ".swiper-button-prev--new-games",
    },
});

let swiperHotGames = new Swiper("#swiperHotGames", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--hot-games",
        prevEl: ".swiper-button-prev--hot-games",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

// COLD GAMES
let swiperColdGames = new Swiper("#swiperColdGames", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--cold-games",
        prevEl: ".swiper-button-prev--cold-games",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

let swiperPatricksGames = new Swiper("#swiperPatricksGames", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--patricks-games",
        prevEl: ".swiper-button-prev--patricks-games",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});


// TABLE GAMES
let swiperTableGames = new Swiper("#swiperTableGames", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--table-games",
        prevEl: ".swiper-button-prev--table-games",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});


// MEGAWAYS
let swiperMegaways = new Swiper("#swiperMegaways", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--megaways",
        prevEl: ".swiper-button-prev--megaways",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

// BONUS GAMES
let swiperBonusGames = new Swiper("#swiperBonusGames", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--bonus-games",
        prevEl: ".swiper-button-prev--bonus-games",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

//  CLASSIC SLOTS
let swiperClassicSlots = new Swiper("#swiperClassicSlots", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--classic-slots",
        prevEl: ".swiper-button-prev--classic-slots",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});


//  BOOK GAMES
let swiperBookGames = new Swiper("#swiperBookGames", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--book-games",
        prevEl: ".swiper-button-prev--book-games",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

//  PROVABLY GAMES
let swiperProvablyGames = new Swiper("#swiperProvablyGames", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--provably-games",
        prevEl: ".swiper-button-prev--provably-games",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

//  JACKPOT
let swiperJackpot = new Swiper("#swiperJackpot", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--jackpot",
        prevEl: ".swiper-button-prev--jackpot",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

//  TOP WINNERS
let swiperTopWinners = new Swiper("#swiperTopWinners", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--top-winners",
        prevEl: ".swiper-button-prev--top-winners",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

//  REVIEWS
let swiperReviews = new Swiper("#swiperReviews", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--review",
        prevEl: ".swiper-button-prev--review",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

//  GAME STUDIOS
let swiperGameStudios = new Swiper("#swiperGameStudios", {
    slidesPerView: 'auto',
    freeMode: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next--game-studios",
        prevEl: ".swiper-button-prev--game-studios",
    },
    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 5,
            slidesPerGroup: 5,
        }
    }
});

// TOP LIVE CASINO
let swiperTopLiveCasino = new Swiper("#swiperTopLiveCasino", {
    slidesPerView: 'auto',
    freeMode: true,

    grid: {
        fill: 'row',
        rows: 1,
    },

    breakpoints: {
        1025: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: {
                rows: 2,
            }
        }
    },
    navigation: {
        nextEl: ".swiper-button-next--toplive-casino",
        prevEl: ".swiper-button-prev--toplive-casino",
    },
});

let swiperFooterProviders = new Swiper(".bs-c-footer-swiper__wrapper", {
    slidesPerView: 'auto',
    // slidesPerGroup: 4,
    freeMode: true,
    momentum: true,
    navigation: {
        nextEl: ".bs-c-footer-swiper-button-next",
        prevEl: ".bs-c-footer-swiper-button-prev",
    },
    breakpoints: {
        // 320: {
        //     slidesPerView: 1
        // },
        1025: {
            freeMode: false
        }
    }
});


const wrap = document.querySelector(".embla");
if (wrap) {
    const viewPort = wrap.querySelector(".embla__viewport");

    const OPTIONS = {
        loop: true,
        watchDrag: false
    }

    number = 0
    let activeSlide = document.querySelectorAll('.c-feeling-lucky-slide')[0]

    const embla = EmblaCarousel(viewPort, OPTIONS)
    embla.on('scroll', function () {
        let number = embla.selectedScrollSnap()
        console.log(embla.selectedScrollSnap())
        activeSlide && activeSlide.classList.remove('active')
        activeSlide = document.querySelectorAll('.c-feeling-lucky-slide')[number]
        activeSlide.classList.add('active')
    })

    let i = 1

    let randomIndexSlide = Math.floor(Math.random() * document.querySelectorAll('.c-feeling-lucky-slide').length)

    const luckyGamesBtn = document.querySelector('.c-feeling-lucky__btn')
    if (luckyGamesBtn) {
        luckyGamesBtn.addEventListener('click', function () {
            randomIndexSlide = Math.floor(Math.random() * document.querySelectorAll('.c-feeling-lucky-slide').length)
            while (randomIndexSlide == 0 || i === randomIndexSlide || randomIndexSlide < 3) {
                randomIndexSlide = Math.floor(Math.random() * document.querySelectorAll('.c-feeling-lucky-slide').length)
            }

            i = randomIndexSlide
            while (i != 0) {
                embla.scrollNext()
                i--
            }

        })
    }
}


// SHOW/HIDE "VIEW ALL" ON CAROUSEL IF ELEMENTS LESS 5
let gamesWrapper = document.querySelector('.c-games-customize-wrapper')

if (gamesWrapper) controlViewAllGames()

function controlViewAllGames() {
    let sections = gamesWrapper.querySelectorAll('.c-games-section-js')

    sections.forEach(section => {
        let lengthGamesSection = section.querySelectorAll('.game').length
        if (lengthGamesSection < 5) {
            section.querySelector('.c-view-all').style.display = 'none'
        }
    })
}

let showFooterInfoBtn = document.querySelector('.footer-copyright__show-more')

if (showFooterInfoBtn) showFooterInfoBtn.addEventListener('click', showFooterInfo)

function showFooterInfo() {
    let footerDisclamer = document.querySelector('.footer-copyright__disclaimer')

    footerDisclamer.classList.toggle('show')
    window.scrollTo(0, document.documentElement.scrollHeight)
    showFooterInfoBtn.textContent = footerDisclamer.classList.contains('show') ? 'Show Less' : 'Show More'
}


// PAGE FAQ
const sectionsFaq = document.querySelectorAll('.faq__accordion-header')
const sectionFaqBodyTitles = document.querySelectorAll('.faq__accordion-body-title')
const sectionFaqBodyContent = document.querySelectorAll('.faq__accordion-body-content')


if (sectionsFaq) {
    sectionsFaq.forEach(section => section.addEventListener('click', sectionFaqClick))
    sectionFaqBodyTitles.forEach(sectionBodyTitle => sectionBodyTitle.addEventListener('click', sectionFaqBodyTitleClick))
}

function sectionFaqClick() {
    // this.classList.toggle('bs-is-expanded')
    this.parentNode.classList.toggle('open')
}

function sectionFaqBodyTitleClick() {
    const sectionTitle = this
    const sectionTitleParent = sectionTitle.parentNode
    const attr = sectionTitle.getAttribute('data-number-name')

    if (sectionTitle.classList.contains('bs-is-opened')) {
        sectionTitle.classList.toggle('bs-is-opened')
        sectionTitleParent.querySelector(`[data-number-content='${attr}']`).classList.toggle('open')
    } else {
        sectionFaqBodyTitles.forEach(otherContent => otherContent.classList.remove('bs-is-opened'))
        sectionTitleParent.querySelector(`[data-number-name='${attr}']`).classList.add('bs-is-opened')

        sectionFaqBodyContent.forEach(otherContent => otherContent.classList.remove('open'))
        sectionTitleParent.querySelector(`[data-number-content='${attr}']`).classList.add('open')
    }



    // sectionFaqBodyContent.forEach(otherContent => otherContent.classList.remove('open'))
    // sectionTitleParent.querySelector(`[data-number-content='${attr}']`).classList.toggle('open')

}


// PROMOTIONS
const promoButtonsInfoOpen = document.querySelectorAll('.promo-card__label--js')
const promoButtonsInfoClose = document.querySelectorAll('.promo-card__label-close-js')

if (promoButtonsInfoOpen) {
    promoButtonsInfoOpen.forEach(btn => btn.addEventListener('click', promoBtnInfoOpenClick))
    promoButtonsInfoClose.forEach(btn => btn.addEventListener('click', promoBtnInfoCloseClick))
}

function promoBtnInfoOpenClick() {
    const promoBtnInfoParentCardWrap = event.target.closest('.promo-card-wrapper')
    const promoBtnInfoParentCardBack = promoBtnInfoParentCardWrap.querySelector('.is-back')
    promoBtnInfoParentCardWrap.classList.toggle('is-back-fliped')
    promoBtnInfoParentCardBack.classList.toggle('is-bonus-info-shown')
}

function promoBtnInfoCloseClick() {
    const promoBtnInfoParentCardWrap = event.target.closest('.is-back-fliped')
    const promoBtnInfoParentCardBack = promoBtnInfoParentCardWrap.querySelector('.is-back')
    promoBtnInfoParentCardWrap.classList.toggle('is-back-fliped')
    promoBtnInfoParentCardBack.classList.toggle('is-bonus-info-shown')
}


// PAGE GAMES
const mainBlock = document.querySelector('main')
const gameBlock = document.querySelector('.games-block')
if (gameBlock) gameBlockInit()

function gameBlockInit() {
    const btnLoadMore = document.querySelector('.games-block__button')
    const games = gameBlock.querySelectorAll('.game')
    let startIndexItems = 0
    let endIndexItems = 0
    let diffItems = 16

    function showItems() {
        if (endIndexItems === games.length) return
        endIndexItems += diffItems
        let i = startIndexItems
        for (i = startIndexItems; i < endIndexItems; i++) {
            if (games[i]) {
                games[i].style.display = 'block'
            } else {
                endIndexItems = games.length
            }
        }
        startIndexItems = i
    }

    showItems()

    btnLoadMore && btnLoadMore.addEventListener('click', _ => {
        showItems()
        btnLoadMore.style.display = 'none'
        scrollDownloadItems()
    })

    function scrollDownloadItems() {
        window.addEventListener('scroll', _ => {
            if (document.documentElement.clientHeight + document.documentElement.scrollTop - 50 > mainBlock.scrollHeight && endIndexItems !== games.length) {
                showItems()
            }
        })
    }
}

var lazyLoadInstance = new LazyLoad();

// SHOW MINI INFO CARD
const buttonsMiniInfoCard = document.querySelectorAll('.c-general-info-card__info')
let statusOpenMiniInfoCard = false

if (buttonsMiniInfoCard) {
    buttonsMiniInfoCard.forEach(btn => btn.addEventListener('mouseenter', MiniInfoCardShow))
}

function MiniInfoCardShow() {
    if (statusOpenMiniInfoCard === false) {
        statusOpenMiniInfoCard = true
    } else return

    const parent = event.target.closest('.c-general-info-card__content')

    parent.addEventListener('mouseleave', _ => {
        parent.classList.remove('active')
        statusOpenMiniInfoCard = false
    })
    parent.classList.toggle('active')
}

// BONUS ON MAIN PAGE

const bonusCodeWrap = document.querySelector('.c-bonus-code-wrapper')
const depositInput = document.querySelector('.bs-c-deposit-amount-number__input')
const cashOutModal = document.querySelector('#cashOut-modal')
const cashInModal = document.querySelector('#cashIn-modal')
const depositBanner = document.querySelector('.bs-c-index-banner__deposit-container')

if (cashOutModal) {
    cashInit(cashOutModal)
}

if (cashInModal) {
    cashInit(cashInModal)
}

if (depositBanner && !depositBanner.closest('.popup-modal')) {
    cashInit(depositBanner)
}


function cashInit(parent) {

    // const currencyType = {
    //     'R$': '500',
    //     $: '20',
    //     kr: '50',
    // }

    const depositBtnText = parent.querySelector('.bs-c-deposit-btn__text')
    const depositInput = parent.querySelector('.bs-c-deposit-amount-number__input')
    const bonusBtnSwitch = parent.querySelector('.bs-c-bonus__switch')
    const depositBtnTextCurrencyValue = parent.querySelector('.bs-c-deposit-btn__text-value')
    const depositTextDouble = parent.querySelector('.bs-c-deposit-btn__text-add')
    const bonusInput = parent.querySelector('.bs-c-deposit__input')
    const bonusCodeActivate = parent.querySelector('.bs-c-bonus-code__btn')
    const bonusCodeActivateParent = parent.querySelector('.c-bonus-code-wrapper')
    const openBtnCodeActivate = parent.querySelectorAll('.bs-c-deposit-code-wrapper__bonus')
    const paymentImages = parent.querySelectorAll('.bs-c-deposit-icons__img')

    let depositInputFocusStatus, bonusBtnSwitchLocalStatus = false
    let depositInputValue = '50.00'
    // let depositCurrencyType = currencyType.$
    let cryptoStatus = false

    if (bonusBtnSwitch) {
        bonusBtnSwitch.addEventListener('click', bonusBtnSwitchClick)
    }


    function bonusBtnSwitchClick() {
        event.preventDefault()

        const inputBonusBtnSwitch = bonusBtnSwitch.querySelector('input')
        const parentBonusBtnSwitch = event.target.closest('.bs-c-bonus-wrapper')

        parentBonusBtnSwitch.classList.toggle('is-disabled')
        bonusBtnSwitch.classList.toggle('is-checked')
        if (bonusBtnSwitch.classList.contains('is-checked')) {

            inputBonusBtnSwitch.checked = true
            if (depositInput.value < 20) {
                depositInputValue = depositInputValue
                depositInput.value = '20.00'
                depositInputKeyFunc()
            }
            depositTextDouble.style.display = 'inline-block'
            bonusBtnSwitchLocalStatus = false
        } else {
            bonusBtnSwitchLocalStatus = true
            inputBonusBtnSwitch.checked = false
            depositTextDouble.style.display = 'none'
        }
    }

    if (depositInput) {
        depositInput.addEventListener('input', depositInputEnterFunc)
        depositInput.addEventListener('keyup', depositInputKeyFunc)
        depositInput.addEventListener('click', depositInputFocusFunc)
        document.addEventListener('click', event => {
            if (!event.target.closest('.bs-c-deposit-amount-number__input')) {
                depositInputFocusStatus = false
                if (cryptoStatus === true) return
                if (checkLengthDepositInput(depositInputValue)) {
                    depositInputValue = checkLengthDepositInput(depositInputValue)
                    depositInput.value = depositInputValue
                } else {
                    depositInput.value = depositInputValue
                }

            }
        })

        function checkLengthDepositInput(value) {
            if (!value) return '0.00'
            if (value.includes('.') && value.split('.')[1] && value.split('.')[1].length < 2) {
                return value.split('.')[1].length == 0 ? value + '00' : value + '0'
            } else if (!value.split('.')[1]) {
                return !value.includes('.') ? value + '.00' : value + '00'
            }
        }
    }


    function depositInputEnterFunc() {
        if ((depositInput.value)[0] === '.') {
            depositInput.value = ''
            return
        }
        depositInput.value = unMask(depositInput.value)

        if (depositInput.value.includes('.') && depositInput.value.split('.')[1].length > 2 && cryptoStatus !== true) {
            depositInput.value = depositInputValue
        } else {
            depositInputValue = depositInput.value
        }

        if (depositInput.value.split('.')[0] >= 20) {
            if (depositBtnTextCurrencyValue) {
                depositBtnTextCurrencyValue.textContent = 2 * depositInputValue
            }

            if (bonusBtnSwitch) {
                const inputBonusBtnSwitch = bonusBtnSwitch.querySelector('input')
                const parentBonusBtnSwitch = document.querySelector('.bs-c-bonus-wrapper')
                if (bonusBtnSwitchLocalStatus === true) return
                depositTextDouble.style.display = 'inline-block'
                parentBonusBtnSwitch.classList.remove('is-disabled')
                bonusBtnSwitch.classList.add('is-checked')
                inputBonusBtnSwitch.checked = bonusBtnSwitch.classList.contains('is-checked') ? true : false
            }


        } else if (depositInput.value != 0 && bonusBtnSwitch) {
            const inputBonusBtnSwitch = bonusBtnSwitch.querySelector('input')
            const parentBonusBtnSwitch = document.querySelector('.bs-c-bonus-wrapper')
            if (bonusBtnSwitchLocalStatus === true) return
            depositTextDouble.style.display = 'none'
            parentBonusBtnSwitch.classList.add('is-disabled')
            bonusBtnSwitch.classList.remove('is-checked')
            inputBonusBtnSwitch.checked = bonusBtnSwitch.classList.contains('is-checked') ? true : false
        }

        function unMask(value) {
            return value.replace(/[^.\d]+/g, '').replace(/^([^\.]*\.)|\./g, '$1')
        }

    }

    function depositInputFocusFunc() {
        depositInputFocusStatus = true
        depositInput.value = ''
        depositInput.placeholder = depositInputValue
    }

    function depositInputKeyFunc() {
        if (depositBtnTextCurrencyValue) {
            depositBtnTextCurrencyValue.textContent = 2 * depositInputValue
        }

    }


    if (bonusInput) bonusInput.addEventListener('keyup', bonusInputKeyFunc)

    function bonusInputKeyFunc() {
        this.value === '' ? bonusCodeActivate.setAttribute('disabled', true) : bonusCodeActivate.removeAttribute('disabled')
    }

    if (openBtnCodeActivate) openBtnCodeActivate.forEach(btn => btn.addEventListener('click', openBtnCodeActivateFunc))

    function openBtnCodeActivateFunc() {
        bonusCodeActivateParent.style.display = bonusCodeActivateParent.style.display === 'none' ? 'block' : 'none'
        if (bonusCodeActivateParent.style.display === 'none') {
            document.querySelector('.bs-c-deposit-code-wrapper__bonus--yes').style.display = 'block'
            document.querySelector('.bs-c-deposit-code-wrapper__bonus--not').style.display = 'none'
        } else {
            document.querySelector('.bs-c-deposit-code-wrapper__bonus--yes').style.display = 'none'
            document.querySelector('.bs-c-deposit-code-wrapper__bonus--not').style.display = 'block'
            bonusInput.value = ''
        }
    }
    document.querySelectorAll('.c-currency-select-list__item').forEach(currencyItem => {
        currencyItem.addEventListener('click', currencyItemClick)
    })

    function currencyItemClick() {
        if (parent.style.display === 'none') return
        cryptoStatus = this.dataset.crypto == 'true' ? true : false
        const parentCurrencyItem = event.target.closest('#deposit-modal')
        parentCurrencyItem.style.display = 'none'
        // if (this.dataset.symbol) {
        //     document.querySelector('.bs-c-deposit-amount-number__symbol').textContent = this.dataset.symbol
        // } else { 
        //     document.querySelector('.bs-c-deposit-amount-number__symbol').textContent = ''
        // }

        parent.querySelector('.c-currency-selector__text').textContent = this.textContent
        const currencySymbol = this.dataset.symbol
        if (currencySymbol) {
            parent.querySelector('.bs-c-deposit-amount-number__symbol').textContent = currencySymbol
            parent.querySelector('.bs-c-deposit-amount-number__symbol').setAttribute('data-symbol', currencySymbol)
        } else {
            parent.querySelector('.bs-c-deposit-amount-number__symbol').textContent = ''
            parent.querySelector('.bs-c-deposit-amount-number__symbol').setAttribute('data-symbol', 'crypto')
        }

        // depositInputValue = currencyType[currencySymbol] || '0.00'
        // depositCurrencyType = currencyType[currencySymbol] || '50'

        parent.querySelector('.c-currency-selector__text').textContent = this.textContent
        if (depositInput) depositInput.value = '0.00'

        paymentImages.forEach(img => {
            if (cryptoStatus === false && img.dataset.payment === 'no-crypto') {
                img.style.display = 'block'
            } else if (cryptoStatus === true && img.dataset.payment !== 'no-crypto') {
                img.style.display = 'block'
            } else {
                img.style.display = 'none'
            }
        })
    }
}

// document.querySelectorAll('.c-currency-select-list__item').forEach(currencyItem => {
//     currencyItem.addEventListener('click', currencyItemClickSecond)
// })

// function currencyItemClickSecond() {
//     cryptoStatus = this.dataset.crypto == 'true' ? true : false
//     const parentCurrencyItem = event.target.closest('#deposit-modal')
//     parentCurrencyItem.style.display = 'none'

//     setAmountSymbol(this)
//     setCurrencyText(this)


//     function setAmountSymbol(thisEl) {
//         const value = thisEl.dataset.symbol || ''
//         if (cashOutModal.style.display === 'block') {
//             cashOutModal.querySelector('.bs-c-deposit-amount-number__symbol').textContent = value
//         } else if (cashInModal.style.display === 'block') {
//             cashInModal.querySelector('.bs-c-deposit-amount-number__symbol').textContent = value
//         }
//     }

//     function setCurrencyText(thisEl) {
//         if (cashOutModal.style.display === 'block') {
//             cashOutModal.querySelector('.c-currency-selector__text').textContent = thisEl.textContent
//         } else if (cashInModal.style.display === 'block') {
//             cashInModal.querySelector('.c-currency-selector__text').textContent = thisEl.textContent
//         }
//     }

// }


// SHOW POPUP
function toggleShowPopup(id) {
    const popup = document.querySelector(`#${id}`)
    if (!popup) return
    const closeBtn = popup.querySelector('.nClose')

    if (popup.style.display === 'block') {
        popup.style.display = 'none'
    } else {
        popup.style.display = 'block'
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            popup.style.display = 'none'
        })
    }

}
// HIDE POPUP
const popupButtonsClose = document.querySelectorAll('.c-modal-overlay-close')
popupButtonsClose && popupButtonsClose.forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.popup-modal').style.display = 'none'

        // this.closest('.popup-modal').querySelectorAll('input').forEach(input => {

        //     if (input.type === 'email' || input.type === 'password' || input.type === 'text') {
        //         input.value = ''

        //         activeBlock = 1
        //         statusValidation = false
        //         activeInputParent = null

        //         const authContents = this.closest('.popup-modal').querySelectorAll('.c-v-auth-step-form__inner')
        //         authContents && authContents.forEach(content => content.style.display = 'none')
        //         authContents[0].style.display = 'block'
        //     }
        // })
    })
})


// ALL INPUT FOCUS
const formInputs = document.querySelectorAll('form')
let currentFormInput, prevFormInput, currentSpan
if (formInputs) formInputs.forEach(form => wrapFocusSpansHandler(form))


function wrapFocusSpansHandler(form) {
    const formButton = form.querySelector('.c-button')
    const wrapFocusSpans = form.querySelectorAll('.focus-status-js')
    let currentInput

    formButton && formButton.addEventListener('click', event => {
        wrapFocusSpans.forEach(span => validateForm(span, form, event))
        // if (form.classList.contains('disable')) {
        //     event.preventDefault()
        // }
    })

    wrapFocusSpans.forEach(span => {
        currentSpan = span
        const formInput = span.querySelector('input')
        const errorDiv = span.querySelector('.has-error-js')
        const inputName = span.querySelector('.bs-c-deposit__input-name')
        const errorInput = span.querySelector('.form-input__error')

        formInput.addEventListener('click', event => {
            currentFormInput = span.querySelector('input')

            if (currentInput && currentInput !== event.target && currentInput.value === '') {
                const prevSpan = currentInput.closest('.focus-status-js')
                prevSpan.classList.remove('is-focus')
                prevSpan.querySelector('.has-error-js').classList.add('has-error')
                prevSpan.querySelector('.form-input__error').style.display = 'block'
            }

            currentInput = event.target

            errorInput.style.display = 'none'
            errorDiv.classList.remove('has-error')
            span.classList.add('is-focus')
        })

        formInput.addEventListener('input', _ => {
            if (formInput.value !== '') {
                errorInput.style.display = 'none'
                errorDiv.classList.remove('has-error')
                inputName.classList.add('has-items')

                if (form.id === 'forgot-password' || form.id === 'resendUnlock' || form.id === 'resendEmail') {
                    if (formInput.value === '') {
                        form.querySelector('.c-button').setAttribute('disabled', 'disabled')
                    } else if (!(formInput.value).match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                        form.querySelector('.c-button').setAttribute('disabled', 'disabled')
                    } else {
                        form.querySelector('.c-button').removeAttribute('disabled')
                    }
                }

            } else {
                inputName.classList.remove('has-items')
            }

        })
    })

    // if (form.classList.contains('bs-c-account-profile-info__form')) {
    //     let inputStatusEmpty = true
    //     let allInputsStatusEmpty = true

    //     form.querySelectorAll('input').forEach(input => {
    //         if (!input.readOnly) return

    //         input.addEventListener('input', function (event) {

    //             if (input.value !== '') {
    //                 allInputsStatusEmpty = false
    //                 form.querySelector('.c-button').removeAttribute('disabled')
    //             }

    //             form.querySelectorAll('input').forEach(input => {
    //                 if (input.getAttribute('readonly') === 'readonly') return

    //                 if (input.value !== '') {
    //                     allInputsStatusEmpty = false
    //                 }
    //             })

    //             if (allInputsStatusEmpty === true) {
    //                 form.querySelector('.c-button').setAttribute('disabled', 'disabled')
    //             }

    //             allInputsStatusEmpty = true
    //         })
    //     })
    // }
}

document.addEventListener('click', event => {
    if (!event.target.closest('input')) {
        if (currentFormInput) {
            currentFormInput.closest('.focus-status-js').classList.remove('is-focus')
            validateForm(currentFormInput.closest('.focus-status-js'))
        }

    }
})

function validateForm(inputParent, currentForm, event) {
    const form = currentForm || currentFormInput.closest('form')
    let errorDiv = inputParent.querySelector('.has-error-js')
    let errorInput = inputParent.querySelector('.form-input__error')
    let input = inputParent.querySelector('input')

    const confirmPassword = form.querySelector('#confirmPassword')
    const password = form.querySelector('#password')

    if (input.name === 'email') {
        if (input.value === '') {
            validateFormSetError(errorDiv, "The email field is required.", 'block', 'add', event)
        } else if (!(input.value).match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            validateFormSetError(errorDiv, "Invalid mail format.", 'block', 'add', event)
        }

    } else if (input.name === 'password' || input.id === 'confirmPassword') {
        if (input.value === '') {
            validateFormSetError(errorDiv, "The password field is required.", 'block', 'add', event)
        } else if (input.id === 'password' && confirmPassword && confirmPassword.value !== input.value) {
            validateFormSetError(errorDiv, "Passwords do not match", 'block', 'add', event)
        } else if (input.id === 'confirmPassword' && password && password.value !== input.value) {
            validateFormSetError(errorDiv, "Passwords do not match", 'block', 'add', event)
        } else {
            validateFormDeleteError()
        }
    } else if (input.id === 'username' && input.value === '') {
        if (errorDiv) {
            validateFormSetError(errorDiv, "The username field is required.", 'block', 'add', event)
        }
    } else {
        validateFormDeleteError()
    }

    function validateFormSetError(errorDiv = null, text, style, actionError, event) {
        if (!errorDiv) return
        errorInput.textContent = text
        errorInput.style.display = style
        actionError === 'add' ? errorDiv.classList.add('has-error') : errorDiv.classList.remove('has-error')
        event && event.preventDefault()
    }

    function validateFormDeleteError() {
        form.classList.remove('disable')
        errorInput.style.display = 'none'
        errorDiv.classList.remove('has-error')
    }
}



const forgotPasswordBtn = document.querySelector('.bs-c-auth-login-forgot-password')
const forgotPasswordLinks = document.querySelectorAll('.forgot-password-link-form')
const resendUnlockBtn = document.querySelector('.resend-unlock-btn-open')
const resendEmailLinks = document.querySelectorAll('.resend-email-btn-open')
let prevModalAuthBlock, currentModalAuthBlock

if (forgotPasswordLinks) {
    forgotPasswordLinks.forEach(link => {
        link.addEventListener('click', function (event) { toggleAuthResendBlocks('.pswd-reset', event) })
    })
}

if (resendEmailLinks) {
    resendEmailLinks.forEach(link => {
        link.addEventListener('click', function (event) { toggleAuthResendBlocks('.resend-email', event) })
    })
}

if (resendUnlockBtn) resendUnlockBtn.addEventListener('click', function (event) { toggleAuthResendBlocks('.resend-unlock', event) })

function toggleAuthResendBlocks(className, event) {
    backModalAuth.style.display = 'block'
    if (event.target.closest('.bs-c-auth-container') && !event.target.closest('.auth-login')) {
        prevModalAuthBlock = event.target.closest('.bs-c-auth-container')
    }

    const block = document.querySelector(className)
    const authContainers = document.querySelectorAll('.bs-c-auth-container')

    authContainers.forEach(auth => auth && auth.classList.remove('show'))
    block.classList.add('show')
    currentModalAuthBlock = block
}

const backModalAuth = document.querySelector('.back-modal-auth')
if (backModalAuth) {
    backModalAuth.addEventListener('click', event => {
        if (prevModalAuthBlock && prevModalAuthBlock.classList.contains('pswd-reset') && currentModalAuthBlock.classList.contains('resend-email')) {
            toggleAuthResendBlocks('.pswd-reset', event)
        } else if (prevModalAuthBlock && prevModalAuthBlock.classList.contains('resend-unlock') && currentModalAuthBlock.classList.contains('resend-email')) {
            toggleAuthResendBlocks('.resend-unlock', event)
        } else if (currentModalAuthBlock.classList.contains('resend-unlock') || currentModalAuthBlock.classList.contains('pswd-reset')) {
            toggleAuthResendBlocks('.auth-login', event)
            backModalAuth.style.display = 'none'
        }
    })
}


const closeModalBtn = document.querySelector('.close-modal-auth')
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModalBtnFunc)


function closeModalBtnFunc() {
    const authContainers = document.querySelectorAll('.bs-c-auth-container')
    if (authContainers) {
        const block = document.querySelector('.auth-login')
        authContainers.forEach(auth => auth && auth.classList.remove('show'))
        block && block.classList.add('show')
    }
}


// SIGN UP

const popupSignUp = document.querySelector('#signUp-modal')
if (popupSignUp) popupSignUpInit(popupSignUp)

let activeBlock = 1
let statusValidation = false
let activeInputParent
let activeMobileSignUpClass

function popupSignUpInit(popup) {
    const btnNext = popup.querySelector('.sign-up-btn-next')
    const btnPrev = popup.querySelector('.sign-up-btn-prev')
    const listItems = popup.querySelectorAll('.c-welcome-info-dashboard-list__item')
    // const form = popup.querySelector('form')
    const formInnerBlocks = popup.querySelectorAll('.c-v-auth-step-form__inner')
    const showPass = popup.querySelector('#i-icon-password-show')
    const hidePass = popup.querySelector('#i-icon-password-hide')
    const iconActionPassParent = showPass.parentNode
    const inputPass = iconActionPassParent.querySelector('input')
    const currencyValue = popup.querySelector('.c-welcome-package-bonus__item-currency')
    const currencyItems = popup.querySelectorAll('.c-currency-select-list__item')
    const bonusBtn = popup.querySelector('.c-welcome-info__bonus-code') || undefined
    const mobileListItems = popup.querySelectorAll('.c-active-step-list__item') || undefined
    const popupChild = popup.querySelector('.c-v-signup-modal')
    const signUpBtnClose = popup.querySelector('.c-v-signup-modal-close')
    const headerTitle = popup.querySelector('.c-v-auth-step-header__title')
    const dashboardTextSecond = popup.querySelector('.c-welcome-info-dashboard-list__item-text--second')

    btnNext && btnNext.addEventListener('click', _ => {

        if (statusValidation === false) return
        formInnerBlocks.forEach(block => {
            if (block.dataset.signup == (activeBlock + 1)) {
                block.style.display = 'flex'
                activeInputParent = block
            } else if (activeBlock < formInnerBlocks.length) {
                block.style.display = 'none'
            }
        })
        if (activeBlock < formInnerBlocks.length) {
            activeBlock += 1
        }

        if (activeBlock !== 3 && activeBlock !== 4) {
            listItems[activeBlock - 2].classList.add('is-finished')
            listItems[activeBlock - 2].classList.remove('is-active')
            listItems[activeBlock - 1].classList.add('is-active')
        }

        if (activeBlock === 2) {
            mobileListItems.forEach(item => {
                item.style.display = 'none'
            })
            mobileListItems[activeBlock - 1].style.display = 'flex'
        }

        headerTitle.textContent = activeInputParent.dataset.headerName
        mobileListItems[1].querySelector('.c-active-step-list__item-text').textContent = activeInputParent.dataset.headerName
        dashboardTextSecond.textContent = activeInputParent.dataset.headerName
        btnPrev.style.display = 'flex'
        btnNext.querySelector('button').setAttribute('type', 'button')
        btnEnter(activeInputParent)
    })

    btnPrev && btnPrev.addEventListener('click', _ => {
        formInnerBlocks.forEach(block => {
            if (block.dataset.signup == (activeBlock - 1)) {
                block.style.display = 'flex'
                activeInputParent = block
            } else if ((activeBlock - 1) != 0) {
                block.style.display = 'none'
            }
        })
        if ((activeBlock - 1) != 0) {
            activeBlock -= 1
        }

        if (activeBlock == 1) {
            btnPrev.style.display = 'none'
            mobileListItems.forEach(item => {
                item.style.display = 'none'
            })
            mobileListItems[activeBlock - 1].style.display = 'flex'
        }
        if (activeBlock !== 3 && activeBlock !== 4) {
            listItems[activeBlock - 1].classList.remove('is-finished')
            listItems[activeBlock - 1].classList.add('is-active')
            listItems[activeBlock].classList.remove('is-active')

            btnEnter(activeInputParent)
        }

        headerTitle.textContent = activeInputParent.dataset.headerName
        mobileListItems[1].querySelector('.c-active-step-list__item-text').textContent = activeInputParent.dataset.headerName
        dashboardTextSecond.textContent = activeInputParent.dataset.headerName
        btnNext.querySelector('span').textContent = 'Continue'
        btnNext.querySelector('button').setAttribute('type', 'button')
        btnEnter(activeInputParent)
    })

    mobileListItems && mobileListItems.forEach(item => {
        item.addEventListener('click', function () {
            activeMobileSignUpClass = this.dataset.section
            popupChild.classList.add(activeMobileSignUpClass)
        })
    })

    signUpBtnClose.addEventListener('click', _ => {
        popupChild.classList.remove(activeMobileSignUpClass)
    })

    showPass.addEventListener('click', _ => {
        togglePassword('text', 'block', 'none')
    })

    hidePass.addEventListener('click', _ => {
        togglePassword('password', 'none', 'block')
    })

    function togglePassword(type, hidePassStyle, showPassStyle) {
        inputPass.type = type
        hidePass.style.display = hidePassStyle
        showPass.style.display = showPassStyle
    }

    formInnerBlocks.forEach(block => {
        block.querySelector('input') && block.querySelector('input').addEventListener('input', inputEnter)
    })

    function inputEnter() {
        const input = this
        const textHelpArray = input.closest('.c-v-auth-step-form__inner').querySelectorAll('.c-input-hint-text')
        const textValidation = input.closest('.c-v-auth-step-form__inner').querySelector('.c-v-sign-up-validation-text')

        validateInput(input, textHelpArray, textValidation)
    }

    function btnEnter(activeInputParent) {
        const input = activeInputParent.querySelector('input')
        const textHelpArray = input.closest('.c-v-auth-step-form__inner').querySelectorAll('.c-input-hint-text')
        const textValidation = input.closest('.c-v-auth-step-form__inner').querySelector('.c-v-sign-up-validation-text')

        validateInput(input, textHelpArray, textValidation)
    }

    function validateInput(input, textHelpArray, textValidation,) {
        if (input.id === 'emailSignUp') {
            if (input.value == '') {
                statusValidation = false
                setResultValidation('none', 'block', 'block', 'The email field is required.')
            } else if (!(input.value).match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                setResultValidation('none', 'none', 'block', 'Invalid mail format.')
                statusValidation = false
            } else {
                statusValidation = true

                setResultValidation('block', 'none', 'none', 'The email field is required.')
            }

        }

        if (input.id === 'usernameSignUp') {
            if (input.value == '') {
                setResultValidation('none', 'block', 'block', 'The username field is required.')
                statusValidation = false
            } else {
                setResultValidation('block', 'none', 'none', 'The username field is required.')
                statusValidation = true
            }
        }

        if (input.id === 'pswdSignUp') {
            if (input.value == '') {
                setResultValidation('none', 'block', 'block', 'The password field is required.')
                statusValidation = false
            } else if (input.value.length < 9) {
                setResultValidation('none', 'block', 'block', 'The password field must be at least 8 characters.')
                statusValidation = false
            } else if (!((input.value).match(/[0-9]/))) {
                setResultValidation('none', 'block', 'block', 'The password field must be at least 1 digit.')
                statusValidation = false
            } else if (input.value === (input.value).toLowerCase()) {
                setResultValidation('none', 'block', 'block', 'The password field must be at least 1 capital letter.')
                statusValidation = false
            } else {
                setResultValidation('block', 'none', 'none', 'The password field is required.')
                statusValidation = true
            }
        }

        if (input.id === 'currencySignUp') {
            setResultValidation('none', 'block', 'block', 'The password field must be at least 1 capital letter.')
            statusValidation = false
        }

        function setResultValidation(btnStyle, textHelpStyle, textValidStyle, textValidContent) {
            btnNext.style.display = btnStyle
            if (textHelpArray && textValidation) {
                textHelpArray.forEach(text => text.style.display = textHelpStyle)
                textValidation.style.display = textValidStyle
                textValidation.textContent = textValidContent
            }
        }
    }

    currencyItems && currencyItems.forEach(item => item.addEventListener('click', selectCurrencyItem))

    function selectCurrencyItem() {
        const parent = this.closest('.c-v-auth-step-form__inner')
        const input = parent.querySelector('input')

        currencyItems.forEach(item => item.classList.remove('active'))

        this.classList.add('active')
        input.value = this.dataset.currency
        currencyValue.textContent = this.dataset.money

        formInnerBlocks.forEach(block => {
            if (block.dataset.signup == (activeBlock + 1)) {
                block.style.display = 'flex'
                activeInputParent = block
            } else if (activeBlock < formInnerBlocks.length) {
                block.style.display = 'none'
            }
        })

        activeBlock += 1
        headerTitle.textContent = activeInputParent.dataset.headerName
        dashboardTextSecond.textContent = activeInputParent.dataset.headerName
        mobileListItems[1].querySelector('.c-active-step-list__item-text').textContent = 'Confirm'
        btnNext.style.display = 'block'
        btnNext.querySelector('button').setAttribute('type', 'submit')
        btnNext.querySelector('span').textContent = 'Confirm'
    }

    bonusBtn && bonusBtn.addEventListener('click', _ => {
        toggleShowPopup('bonus-code-modal')
    })
}


const inputBonusCodeModal = document.querySelector('#bonusCodeInput')

if (inputBonusCodeModal) inputBonusCodeModal.addEventListener('input', inputBonusCodeModalEnter)

function inputBonusCodeModalEnter() {
    const parentModal = this.closest('.popup-modal') || undefined
    if (parentModal === undefined) return
    const btn = parentModal.querySelector('.c-button')

    if (this.value !== '') {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', 'disabled')
    }
}


// SHOW HEADER USER
const headerUser = document.querySelector('.header-user-dropdown')

headerUser && headerUser.addEventListener('mouseenter', function () {
    this.classList.add('is-open')
    this.querySelector('.header-user-dropdown__content').style.display = 'block'
})

headerUser && headerUser.addEventListener('mouseleave', function () {
    this.classList.remove('is-open')
    this.querySelector('.header-user-dropdown__content').style.display = 'none'
})

const notificationsUser = document.querySelector('.notifications')

notificationsUser && notificationsUser.addEventListener('mouseenter', function () {
    this.classList.add('is-open')
    this.querySelector('.notification-dropdown').style.display = 'block'
})

notificationsUser && notificationsUser.addEventListener('mouseleave', function () {
    this.classList.remove('is-open')
    this.querySelector('.notification-dropdown').style.display = 'none'
})



// SEARCH HEADER

const searchResultBlock = document.querySelector('.search-results')

searchResultBlock && function () {
    const games = searchResultBlock.querySelector('.games-block').querySelectorAll('.search-results-game')
    const searchCategoryItems = searchResultBlock.querySelectorAll('.search-categories__item')
    const gameSearchInput = document.querySelector('#gameSearchInput')
    const searchInputWrap = document.querySelector('.c-search-content')
    const searchBtnClose = document.querySelector('.c-search-results__close')
    const searchBtnOpenMobile = document.querySelector('.navbar__search-btn')
    const searchNotFoundBlock = document.querySelector('.search-result-none__title')
    let gamesLength = games.length
    let activeCategory = 'all'
    let searchInputValue = ''
    let statusEmptyGames = false

    setCountGamesResult()
    searchCategoryItems.forEach(item => item.addEventListener('click', setSearchCategoryItem))

    gameSearchInput.addEventListener('input', gameSearchInputEnter)

    searchInputWrap.addEventListener('click', function () {
        if (event.target.closest('.c-search-content') && !event.target.closest('.c-search-results__close')) {
            this.closest('.c-games-search').classList.add('is-search-opened')
        }

    })

    searchBtnOpenMobile && searchBtnOpenMobile.addEventListener('click', function () {
        this.closest('.c-games-search').classList.add('is-search-opened')
    })

    searchBtnClose && searchBtnClose.addEventListener('click', function () {
        this.closest('.c-games-search').classList.remove('is-search-opened')
    })

    document.addEventListener('click', function () {
        if (!event.target.closest('.c-games-search')) {
            document.querySelector('.c-games-search').classList.remove('is-search-opened')
        }
    })

    function gameSearchInputEnter() {
        this.value = this.value.replace(/[0-9\/\*\-\+]+/g, '')
        searchInputValue = this.value
        setDisplayGames('input')
    }

    function setDisplayGames(action) {
        gamesLength = 0
        statusEmptyGames = true
        games.forEach(game => {
            if (game.dataset.gameName.toLowerCase().includes(searchInputValue)
                && (game.dataset.gameCategory.toLowerCase() === activeCategory || activeCategory === 'all')) {
                game.style.display = 'block'
                statusEmptyGames = false
                gamesLength += 1
            } else {
                game.style.display = 'none'
            }
            // }
        })

        if (statusEmptyGames === true) {
            searchNotFoundBlock.querySelector('span').textContent = "'" + searchInputValue + "'"
            searchNotFoundBlock.style.display = 'block'
        } else {
            searchNotFoundBlock.style.display = 'none'
        }
        setCountGamesResult()
    }

    function setCountGamesResult() {
        searchResultBlock.querySelector('.search-games-founded').textContent = gamesLength
    }

    function setSearchCategoryItem() {
        searchCategoryItems.forEach(item => item.classList.remove('is-active'))
        this.classList.add('is-active')
        activeCategory = this.dataset.gameCategory.toLowerCase()
        setDisplayGames()
    }

}()


// GAME SWITCH MODE
const switchGameModeBtn = document.querySelector('.bs-c-game-modal__real-play-switch')

switchGameModeBtn && function () {
    switchGameModeBtn.addEventListener('click', function () {
        event.preventDefault()
        this.classList.toggle('is-checked')
        this.querySelector('input').checked = this.classList.contains('is-checked') ? true : false
    })
}()

// FULL SCREEN GAME
const btnFullScreenGame = document.querySelector('.btn-full-game')

btnFullScreenGame && function () {
    btnFullScreenGame.addEventListener('click', function () {
        this.closest('.bs-c-game-modal').classList.toggle('modal--maximized')
    })
}()

// MY ACCOUNT
const accountBlock = document.querySelector('.account-block')

accountBlock && function () {
    const accountBlockmain = document.querySelector('.account-block__content-main')
    const accountBlockMenuItems = accountBlockmain.querySelectorAll('.bs-c-tabs-swiper__item')
    const accountMenuItems = document.querySelectorAll('.bs-c-account-menu-list__item')
    const accountContentItems = document.querySelectorAll('.account-block__content-inner')
    const selectLists = document.querySelectorAll('.bs-c-account-dropdown-select')
    const selectListItems = document.querySelectorAll('.bs-c-account-dropdown-list__item')
    const phoneInputWrap = document.querySelectorAll('.is-phone')

    let activeSelectList
    const href = window.location.hash
    const hrefValue = (href && href.replace('#', '')) || undefined

    hrefValue && accountContentItemsSetVisible(href)
    hrefValue && accountMenuItemSetActive(href)

    accountMenuItems.forEach(item => item.addEventListener('click', accountMenuItemClick))
    selectLists.forEach(list => list.addEventListener('click', selectListClick))
    selectListItems.forEach(item => item.addEventListener('click', selectItemClick))

    function accountMenuItemClick() {
        accountMenuItems.forEach(item => item.classList.remove('is-active'))
        accountContentItemsSetVisible(this.dataset.menu)

        this.classList.add('is-active')
    }

    function accountContentItemsSetVisible(elem) {
        accountContentItems.forEach(item => {
            if (elem.includes(item.dataset.content)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    }

    function selectListClick() {
        const listParent = this.closest('.bs-c-account-dropdown')

        activeSelectList = listParent
        listParent.classList.toggle('is-dropdown-open')
        countrySearchSetClear()
    }

    function selectItemClick() {
        const elemText = this.querySelector('.bs-c-account-dropdown-list__item-text')
        const listParent = this.closest('.bs-c-account-dropdown')
        const label = listParent.querySelector('.bs-c-account-dropdown-select__label')
        const coutryItemStatus = this.classList.contains('bs-c-country-dropdown-list__item') ? true : false
        const input = listParent.querySelector('input')
        const phoneSelectImg = listParent.querySelector('.bs-c-country-dropdown-select__icon-flag')

        if (label && coutryItemStatus === false) {
            label.textContent = elemText.textContent
            input.value = elemText.textContent.replace(/ /g, '')
            listParent.classList.remove('is-dropdown-open')
        } else if (coutryItemStatus === true) {
            if (this.closest('.country-select-block')) {
                label.textContent = elemText.textContent.replace(/ /g, '')
                input.value = elemText.textContent.replace(/ /g, '')
            } else {
                label.textContent = elemText.textContent.replace(/[^\+\d]/g, '')
                input.value = elemText.textContent.replace(/[^\+\d]/g, '')
            }

            // phoneCountryValue = input.value
            phoneSelectImg.setAttribute('src', this.querySelector('.c-flag-icon').getAttribute('src'))
            listParent.classList.remove('is-dropdown-open')
            // phoneInputWrap.querySelector('input').value = ''
            // input.closest('.is-phone-wrapper').querySelector('.is-phone').querySelector('input').value = ''

            if (input.closest('.bs-c-deposit__input-wrapper').querySelector('.is-phone')) {
                input.closest('.bs-c-deposit__input-wrapper').querySelector('.is-phone').querySelector('input').value = ''
            }
            countrySearchSetClear()
        }
    }

    document.addEventListener('click', event => {
        if (!event.target.closest('.bs-c-account-dropdown')) {
            activeSelectList && activeSelectList.classList.remove('is-dropdown-open')
        }
    });

    // (function historyContent() {
    const contentMenuItems = accountBlock.querySelectorAll('.bs-c-tabs-swiper__item')

    contentMenuItems.forEach(item => {
        item.addEventListener('click', function () {
            const currentBlockParent = this.closest('.account-block__content-inner')
            const contentBlocks = currentBlockParent.querySelectorAll('.bs-c-widgets-wrapper')
            currentBlockParent.querySelectorAll('.bs-c-tabs-swiper__item').forEach(item => {
                item.classList.remove('is-active')
            })

            contentBlocks.forEach(item => {
                if (item.dataset.subContent === this.dataset.subMenu) {
                    item.style.display = 'flex'
                } else {
                    item.style.display = 'none'
                }
            })

            this.classList.add('is-active')
        })
    });
    // })();

    (function profileInfo() {
        const phoneInputHide = document.querySelectorAll('#phone')
        const searchPhoneInputs = document.querySelectorAll('.bs-c-country-dropdown-list__search-input')
        let phoneCountryValue = ''
        phoneInputWrap && phoneInputWrap.forEach(wrap => {
            wrap.querySelector('input').addEventListener('keyup', phoneInputKeyEnter)
            wrap.querySelector('input').addEventListener('input', phoneInputEnter)
        })


        searchPhoneInputs && searchPhoneInputs.forEach(item => item.addEventListener('input', searchPhoneEnter))

        function phoneInputKeyEnter() {
            if (this.closest('.is-phone-wrapper').querySelector('.mobilePhoneVerif').value === '') {
                const firstNumber = this.closest('.is-phone-wrapper').querySelector('.bs-country-dropdown-select__text').textContent.replace(/ /g, '')
                this.closest('.is-phone-wrapper').querySelector('.mobilePhoneVerif').value = firstNumber
            }
            this.closest('.is-phone-wrapper').querySelector('.mobilePhoneVerif').value += event.key
            // phoneInputHide.value += event.key
        }

        function phoneInputEnter() {
            this.value = this.value.replace(/[^\d]/g, '')
        }

        function searchPhoneEnter() {
            const listPhoneItems = this.closest('.bs-c-deposit__input-wrapper').querySelectorAll('.bs-c-country-dropdown-list__item-text')

            listPhoneItems.forEach(item => {
                if (item.textContent.toLowerCase().includes(this.value)) {
                    item.closest('li').style.display = 'block'
                } else {
                    item.closest('li').style.display = 'none'
                }
            })
        }

        const startDateBirthday = '1900'
        let today = new Date()
        let dd = today.getDate()
        let mm = today.getMonth() + 1
        let yyyy = today.getFullYear() - 18
        let setEndDateBirthday = `${dd}/${mm}/${yyyy}`

        $('[data-toggle="datepicker"]').datepicker({
            autoHide: true,
            startDate: startDateBirthday,
            endDate: setEndDateBirthday,
            startView: 2
        });

        document.querySelector('[data-toggle="datepicker"]').addEventListener('click', function () {
            document.querySelector('.bs-c-datepicker').querySelector('.bs-c-deposit__input-name').classList.add('has-items')
        })

    })();

    (function security() {
        const resetPassModal = document.querySelector('#change-password')
        const twoFactorAuthModal = document.querySelector('#two-factor-auth')
        // const phoneNumberModal = document.querySelector('#phone-number')
        const securityQuestionModal = document.querySelector('#security-question')
        const verificationModal = document.querySelector('#identity-document')
        const addressModal = document.querySelector('#address-document')
        const depositModal = document.querySelector('#deposit-document')
        const paymentModal = document.querySelector('#payment-document')
        const otherModal = document.querySelector('#other-document')
        const limitCards = document.querySelectorAll('.bs-c-limits-card')
        const newDepositModal = document.querySelector('#new-deposit-limit')
        const newLossModal = document.querySelector('#new-loss-limit')
        const newWagerLimit = document.querySelector('#add-new-limit')
        if (resetPassModal) passinit()
        if (twoFactorAuthModal) twoFactorAuthInit()
        if (securityQuestionModal) securityQuestionInit()
        if (verificationModal) verificationInit(verificationModal)
        if (addressModal) verificationInit(addressModal)
        if (depositModal) verificationInit(depositModal)
        if (otherModal) verificationInit(otherModal)
        if (limitCards) limitsInit(limitCards)
        if (newDepositModal) newDepositModalInit(newDepositModal)
        if (newLossModal) newDepositModalInit(newLossModal)
        if (newWagerLimit) newDepositModalInit(newWagerLimit)
        // if (phoneNumberModal) phoneNumberInit()
        function passinit() {
            const passWrapStrength = resetPassModal.querySelector('.bs-password-strength')
            const passStrengthName = passWrapStrength && passWrapStrength.querySelector('.bs-password-strength__name')
            const inputs = resetPassModal.querySelectorAll('input')
            const passwordQuality = resetPassModal.querySelector('.bs-password-strength__meter')
            const passwordConditions = resetPassModal.querySelector('.bs-password-strength__conditions')
            const passwordConditionsItems = passwordConditions && passwordConditions.querySelectorAll('li')
            const passBtnSubmit = resetPassModal.querySelector('.bs-c-security-password__submit')

            let statusFormValidate = false
            let newPass, confirmPass
            let countPassQuality = 0
            let passLengthValidate = 0, passValueValidate = 0, passNumberValidate = 0
            let passStrengthNames = ['', 'Weak', 'Medium', 'Strong']
            let passStrengthStatuses = [passLengthValidate, passValueValidate, passNumberValidate]
            // let passwordQualityStyleText = `--conditions-fulfilled: ${countPassQuality}`

            inputs.forEach(input => input.addEventListener('input', inputEnter))

            function inputEnter() {
                if (this.id === 'current_password' && this.value === '') {
                    addError(this)
                } else if (this.id === 'password') {
                    newPass = this
                    if ((this.value.length > 7 && passLengthValidate == 0)) {
                        passLengthValidate = 1
                        setPasswordValidate(this, false)
                    } else if ((this.value.length < 8 && passLengthValidate == 1)) {
                        passLengthValidate = 0
                        setPasswordValidate(this, true)
                    }

                    if (this.value !== this.value.toLowerCase() && passValueValidate == 0) {
                        passValueValidate = 1
                        setPasswordValidate(this, false)
                    } else if (this.value === this.value.toLowerCase() && passValueValidate == 1) {
                        passValueValidate = 0
                        setPasswordValidate(this, true)
                    }

                    if (this.value.match(/[0-9]/) && passNumberValidate == 0) {
                        passNumberValidate = 1
                        setPasswordValidate(this, false)
                    } else if (!this.value.match(/[0-9]/) && passNumberValidate == 1) {
                        passNumberValidate = 0
                        setPasswordValidate(this, true)
                    }

                    (passLengthValidate == 0 || passValueValidate == 0 || passNumberValidate == 0)
                        ? addError(this)
                        : removeError(this)

                    confirmPass && confirmPass.value !== newPass.value
                        ? addError(confirmPass, 'The password confirmation does not match.')
                        : confirmPass && removeError(confirmPass, ' ')

                } else if (this.id === 'passwordConfirm') {
                    confirmPass = this
                    if (confirmPass.value === '') {
                        addError(this, 'The password confirmation does not match.')
                    } else if (!newPass || confirmPass.value !== newPass.value) {
                        addError(this, 'The password confirmation field is required.')
                    } else {
                        removeError(this, ' ')
                    }

                } else {
                    removeError(this)
                }

                statusFormValidate = true
                inputs.forEach(input => {
                    if (!input.closest('.is-verified')) statusFormValidate = false
                })
                if (statusFormValidate === true) passBtnSubmit.removeAttribute('disabled')

            }

            function addError(elem, errorText = null) {
                elem.closest('div').classList.remove('is-verified')
                elem.closest('div').classList.add('has-error')
                passBtnSubmit.setAttribute('disabled', 'disabled')
                if (errorText) elem.closest('div').querySelector('.form-input__error').textContent = errorText
            }

            function removeError(elem, errorText = null) {
                elem.closest('div').classList.remove('has-error')
                elem.closest('div').classList.add('is-verified')
                if (errorText) elem.closest('div').querySelector('.form-input__error').textContent = errorText
            }

            function setPasswordValidate(elem, errorStatus) {
                // errorStatus === true ? addError(elem) : removeError(elem)
                if (!passWrapStrength) return

                passStrengthStatuses = [passLengthValidate, passValueValidate, passNumberValidate]
                passWrapStrength.classList.remove(`is-conditions-fulfilled-${countPassQuality}`)
                countPassQuality = passLengthValidate + passValueValidate + passNumberValidate
                passwordQuality.style = `--conditions-fulfilled: ${countPassQuality}`
                passWrapStrength.classList.add(`is-conditions-fulfilled-${countPassQuality}`)
                passStrengthName.textContent = passStrengthNames[countPassQuality]

                passStrengthStatuses.forEach((item, index) => {
                    if (item === 1) {
                        passwordConditionsItems[index].querySelector('svg').classList.add('is-fulfilled')
                    } else {
                        passwordConditionsItems[index].querySelector('svg').classList.remove('is-fulfilled')
                    }
                })
            }
        }

        function twoFactorAuthInit() {
            const btnCopy = twoFactorAuthModal.querySelector('.btn--copy')
            const textForCopy = btnCopy.closest('div').querySelector('.bs-c-deposit__input')
            const securityWrap = twoFactorAuthModal.querySelector('.bs-c-security-2fa__activate')
            const securityInput = securityWrap.querySelector('.bs-c-deposit__input')
            const securityBtn = securityWrap.querySelector('button')
            let range = document.createRange();

            btnCopy.addEventListener('click', function () {
                range.selectNode(textForCopy);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand("copy");
                window.getSelection().removeAllRanges();
            })

            securityInput.addEventListener('input', function () {
                this.value = this.value.replace(/[\D]/g, '')
                if (this.value !== '') {
                    securityBtn.removeAttribute('disabled')
                    this.closest('div').classList.add('is-verified')
                } else if (this.value === '') {
                    securityBtn.setAttribute('disabled', 'disabled')
                    this.closest('div').classList.remove('is-verified')
                }
            })
        }

        function securityQuestionInit() {
            const dropdownHeader = securityQuestionModal.querySelector('.bs-c-dropdown')
            const dropdownMenu = securityQuestionModal.querySelector('.bs-c-dropdown__list')
            const dropdownItems = dropdownMenu.querySelectorAll('.bs-c-dropdown__list-item')
            const securityText = securityQuestionModal.querySelector('.bs-c-dropdown-content__label')
            const securityInput = securityQuestionModal.querySelector('#securityQuestion')
            const secretAsnwerWrap = securityQuestionModal.querySelector('.secret-answer-wrap')
            const secretAsnwerInput = secretAsnwerWrap.querySelector('input')
            const securityBtnSubmit = securityQuestionModal.querySelector('.bs-c-security-question__btn')
            const errorSpan = securityQuestionModal.querySelector('.form-input__error')
            const errorText = 'The Your Answer field must be at least 3 characters.'

            secretAsnwerInput.addEventListener('input', function () {
                if (this.value !== '' && this.value.length > 2) {
                    securityBtnSubmit.removeAttribute('disabled', 'disabled')
                    this.closest('div').classList.add('is-verified')
                    this.closest('div').classList.remove('has-error')
                    errorSpan.innerText = ''
                } else {
                    this.closest('div').classList.remove('is-verified')
                    this.closest('div').classList.add('has-error')
                    securityBtnSubmit.setAttribute('disabled', 'disabled')
                    errorSpan.innerText = errorText
                }
            })

            dropdownHeader.addEventListener('click', function () {
                event.preventDefault()
                this.classList.toggle('is-open')
            })

            dropdownItems.forEach(item => item.addEventListener('click', function () {
                securityText.innerText = item.querySelector('span').innerText
                securityInput.value = item.querySelector('span').innerText
                secretAsnwerWrap.style.display = 'block'
            }))

            document.addEventListener('click', function () {
                if (!event.target.closest('.bs-c-dropdown')) {
                    dropdownHeader.classList.remove('is-open')
                }
            })
        }
        const listTrigger = document.querySelector('.bs-docs-list-trigger')

        listTrigger && listTrigger.addEventListener('click', function () {
            this.closest('div').querySelector('.c-docs-list-toggle').classList.toggle('is-rotated')
            this.closest('div').querySelector('ul').classList.toggle('is-collapsed')
        })
        function verificationInit(modal) {
            // const dropdownMenuArray = modal.querySelectorAll('.bs-c-dropdown')
            const form = modal.querySelector('form')
            const menu = modal.querySelector('.bs-c-dropdown')


            // dropdownMenuArray.forEach(menu => {
            const dropdownListItems = menu && menu.querySelectorAll('.bs-c-dropdown__list-item')
            // const form = menu.closest('form')
            const inputsUploadImg = form.querySelectorAll('.bs-c-dragndrop-uploader__input')
            const formBtn = form.querySelector('.c-button')

            menu && menu.addEventListener('click', function () {
                this.classList.toggle('is-open')

            })

            inputsUploadImg.forEach(input => {
                const changeImgBtn = input.closest('div').querySelector('.bs-c-dragndrop-uploader__preview-close')
                input.addEventListener('change', function () {
                    this.closest('div').querySelector('.bs-c-dragndrop-uploader__wrapper').style.display = 'flex'
                    this.closest('label').style.display = 'none'
                    formBtn.removeAttribute('disabled', 'disabled')
                })

                changeImgBtn.addEventListener('click', function () {
                    this.closest('div').style.display = 'none'
                    input.closest('label').style.display = 'block'
                    input.value = ''
                    formBtn.setAttribute('disabled', 'disabled')
                })
            })


            dropdownListItems && dropdownListItems.forEach(item => {
                item.addEventListener('click', function () {
                    menu.querySelector('.bs-c-dropdown-content__label').innerText = item.querySelector('.bs-c-dropdown__list-item-text').innerText
                    if (menu.querySelector('.input-text-identity')) {
                        menu.querySelector('.input-text-identity').value = item.querySelector('.bs-c-dropdown__list-item-text').innerText
                    }
                    form.querySelectorAll('.bs-c-dragndrop-uploader').forEach(item => {
                        item.querySelectorAll('.bs-c-dragndrop-uploader__dropzone').forEach(item => item.style.display = 'block')
                        item.querySelector('.bs-c-dragndrop-uploader__wrapper').querySelectorAll('.bs-c-dragndrop-uploader__wrapper').forEach(item => item.style.display = 'none')
                    })
                    // form.querySelectorAll('.bs-c-dragndrop-uploader').forEach(item => {
                    //     item.style.display = 'none'
                    // })
                    inputsUploadImg.forEach(input => input.value = '')
                    formBtn.setAttribute('disabled', 'disabled')

                    if (form.querySelector('.bs-c-verification__requirements')) {
                        form.querySelector('.bs-c-verification__requirements').style.display = 'flex'
                    }
                    form.querySelector('.bs-c-deposit__input-wrapper').style.display = 'block'

                    if (item.dataset.idName) {
                        dropdownListItems.forEach(item => form.classList.remove(item.dataset.idName))
                        form.classList.add(item.dataset.idName)
                        if (item.dataset.idName === 'passport') {
                            form.querySelector('.bs-c-verification-identity__inputs-passport').style.display = 'grid'
                            form.querySelector('.bs-c-verification-identity__inputs-other-identity').style.display = 'none'
                        } else {
                            form.querySelector('.bs-c-verification-identity__inputs-passport').style.display = 'none'
                            form.querySelector('.bs-c-verification-identity__inputs-other-identity').style.display = 'grid'
                        }
                    } else {
                        form.querySelector('.bs-c-dragndrop-uploader__wrapper').style.display = 'grid'
                    }
                })
            })
            // })

        }
    })()

    function limitsInit(limitCards) {
        limitCards.forEach(card => {

            const showMoreBtn = card.querySelector('.bs-c-limits-card__show-more')
            const menu = card.querySelector('.bs-c-dropdown')
            // const dropdownMenuArray = document.querySelectorAll('.bs-c-dropdown')
            const input = card.querySelector('.bs-c-deposit__input')
            const submit = card.querySelector('.bs-my-profile-card__btn')
            showMoreBtn && showMoreBtn.addEventListener('click', function () {
                event.preventDefault
                this.closest('.bs-c-limits-card__text').querySelectorAll('p').forEach(p => p.style.display = 'block')
                this.style.display = 'none'
            })

            menu && function () {
                const menuItems = menu.querySelectorAll('.bs-c-dropdown__list-item')
                menu.addEventListener('click', function () {
                    if (!event.target.closest('.bs-c-dropdown__list-item')) {
                        menu.classList.add('is-open')
                    }

                })

                menuItems.forEach(item => item.addEventListener('click', function () {
                    menu.querySelector('input').value = item.innerText.replace(/ /g, '')
                    if (menu.querySelector('.bs-c-dropdown-content__text')) {
                        menu.querySelector('.bs-c-dropdown-content__text').textContent = item.textContent
                    } else {
                        menu.querySelector('.bs-c-dropdown-content__label').textContent = item.textContent
                        submit.removeAttribute('disabled', 'disabled')

                    }

                    menu.classList.remove('is-open')
                }))
            }();

            input && input.addEventListener('input', function () {
                this.value = this.value.replace(/[^.\d]+/g, '').replace(/^([^\.]*\.)|\./g, '$1')
                if (this.value === '') {
                    submit.setAttribute('disabled', 'disabled')
                } else {
                    submit.removeAttribute('disabled', 'disabled')
                }
            })
        })
    }

    function newDepositModalInit(newDepositModal) {
        const form = newDepositModal.querySelector('form')
        const input = form.querySelector('.bs-c-deposit__input')
        const submit = form.querySelector('button')

        const menu = newDepositModal.querySelector('.bs-c-dropdown')

        menu && function () {
            const menuItems = menu.querySelectorAll('.bs-c-dropdown__list-item')
            menu.addEventListener('click', function () {
                if (!event.target.closest('.bs-c-dropdown__list-item')) {
                    menu.classList.add('is-open')
                }

            })

            menuItems.forEach(item => item.addEventListener('click', function () {
                menu.querySelector('input').value = item.innerText.replace(/ /g, '')
                if (menu.querySelector('.bs-c-dropdown-content__text')) {
                    menu.querySelector('.bs-c-dropdown-content__text').textContent = item.textContent
                } else {
                    menu.querySelector('.bs-c-dropdown-content__label').textContent = item.textContent
                    submit.removeAttribute('disabled', 'disabled')

                }

                menu.classList.remove('is-open')
            }))
        }();

        input.addEventListener('input', function () {
            this.value = this.value.replace(/[^.\d]+/g, '').replace(/^([^\.]*\.)|\./g, '$1')
            if (this.value === '') {
                submit.setAttribute('disabled', 'disabled')
            } else {
                submit.removeAttribute('disabled', 'disabled')
            }
        })
    }

    function newLossModalInit(newLossModal) {
        const form = newLossModal.querySelector('form')
        const input = form.querySelector('.bs-c-deposit__input')
        const submit = form.querySelector('button')
        input.addEventListener('input', function () {
            this.value = this.value.replace(/[^.\d]+/g, '').replace(/^([^\.]*\.)|\./g, '$1')
            if (this.value === '') {
                submit.setAttribute('disabled', 'disabled')
            } else {
                submit.removeAttribute('disabled', 'disabled')
            }
        })
    }

    const checkboxLabels = document.querySelectorAll('.bs-c-toggle-button')
    checkboxLabels.forEach(item => {
        if (item.closest('.bs-c-index-banner__deposit-container')) return
        item.addEventListener('click', function () {
            event.preventDefault()
            this.classList.toggle('is-checked')
            if (this.classList.contains('is-checked')) {
                this.querySelector('input').chekced = true
            } else {
                this.querySelector('input').chekced = false
            }

        })
    })

    function countrySearchSetClear() {
        accountBlock.querySelectorAll('.bs-c-country-dropdown-list__search-input').forEach(item => {
            item.value = ''
        })
        accountBlock.querySelectorAll('.bs-c-country-dropdown-list__item-text').forEach(item => {
            item.closest('li').style.display = 'block'
        })
    }

    function accountMenuItemSetActive(elem) {
        accountMenuItems.forEach(item => {
            if (elem.includes(item.dataset.menu)) {
                item.classList.add('is-active')
            } else {
                item.classList.remove('is-active')
            }
        })
    }

    document.addEventListener('click', function () {
        if (!event.target.closest('.bs-c-dropdown')) {
            document.querySelectorAll('.bs-c-dropdown') && document.querySelectorAll('.bs-c-dropdown').forEach(item => {
                item.classList.remove('is-open')
            })
        }
    })
}()



const notificationButtonsModalClose = document.querySelectorAll('.toast-notification-close-button')

notificationButtonsModalClose && notificationButtonsModalClose.forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.toasted').style.display = 'none'
    })
})


const inputArray = document.querySelectorAll('input')

inputArray.forEach(input => {
    input.addEventListener('input', function () {
        const inputName = this.closest('div').querySelector('.bs-c-deposit__input-name')
        inputName && inputName.classList.add('has-items')
        if (this.value === '' && inputName) {
            inputName.classList.remove('has-items')
        }
    })
})


const visibilityPassButtons = document.querySelectorAll('.c-password-visible')

visibilityPassButtons && visibilityPassButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.bs-c-deposit__input-wrapper').querySelector('input').type = 'text'
        this.closest('.bs-c-deposit__input-wrapper').querySelector('.c-password-visible').style.display = 'none'
        this.closest('.bs-c-deposit__input-wrapper').querySelector('.c-password-hide').style.display = 'block'
    })
})

const hidePassButtons = document.querySelectorAll('.c-password-hide')

hidePassButtons && hidePassButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.bs-c-deposit__input-wrapper').querySelector('input').type = 'password'
        this.closest('.bs-c-deposit__input-wrapper').querySelector('.c-password-visible').style.display = 'block'
        this.closest('.bs-c-deposit__input-wrapper').querySelector('.c-password-hide').style.display = 'none'
    })
})