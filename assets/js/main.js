(function(w, d){

	const mobileMenuToggleBtn = d.querySelector('.js-toggle-mobile-menu');
	if (mobileMenuToggleBtn != null) {
		mobileMenuToggleBtn.addEventListener('click', (e) => {
			e.target.classList.toggle('active');
			e.target.closest('.header-mobile').querySelector('.header-mobile-menu-container').classList.toggle('active');
			d.body.classList.toggle('overflow-hidden');
		});
	}

	const passwordToggle = d.querySelectorAll('.js-password-group');
	if (passwordToggle != null) {		
		passwordToggle.forEach((passwordGroup) => {
			const inputPassword = passwordGroup.querySelector('.js-input-password');
			const toggleBtn = passwordGroup.querySelector('.js-password-toggle');

			inputPassword.addEventListener('input', (e) => {
				e.target.value.length > 0 ? e.target.classList.add('typing') : e.target.classList.remove('typing');
			});

			toggleBtn.addEventListener('click', (e) => {
				e.preventDefault();
				e.target.classList.toggle('active');
				inputPassword.getAttribute('type') === 'password' ? inputPassword.setAttribute('type', 'text') : inputPassword.setAttribute('type', 'password');
			});
		});
	}

	const maskPhoneInput = d.querySelectorAll('.js-phone-mask');
	if (maskPhoneInput != null) {
		const maskOptions = {
			mask: '+7(000)000-00-00'
		};
		maskPhoneInput.forEach((input) => {
			new IMask(input, maskOptions);
		});
	}

	const tooltipTriggerList = [].slice.call(d.querySelectorAll('[data-bs-toggle="tooltip"]'));
	const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	const clipboardBtn = d.querySelectorAll('.js-clipboard');
	if (clipboardBtn != null) {
		clipboardBtn.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				const copyText = e.target.getAttribute('data-clipboard');
				navigator.clipboard.writeText(copyText).then(() => {
					const successAlert = d.querySelector('.success-clipboard-alert');
					if (successAlert != null) {
						successAlert.classList.add('active');
						setTimeout(() => {
							successAlert.classList.remove('active');
						}, 1000)
					}
				}).catch(err => {
					console.log('Error', err);
				});
			});
		});
	}

	const clipboardInputBtn = d.querySelectorAll('.js-input-clipboard');
	if (clipboardInputBtn != null) {
		clipboardInputBtn.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				const copyText = e.target.closest('.form-group').querySelector('.form-control').value;
				navigator.clipboard.writeText(copyText).then(() => {
					const successAlert = d.querySelector('.success-clipboard-alert');
					if (successAlert != null) {
						successAlert.classList.add('active');
						setTimeout(() => {
							successAlert.classList.remove('active');
						}, 1000)
					}
				}).catch(err => {
					console.log('Error', err);
				});
			});
		});
	}

	const textareaEducationSetBtn = d.querySelectorAll('.js-textarea-education-set');
	if (textareaEducationSetBtn != null) {
		textareaEducationSetBtn.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				const textareaEducation = d.querySelector('.textarea-education:not(:disabled)');
				if (textareaEducation != null) textareaEducation.value = e.target.innerText;
				e.target.closest('.modal-container').classList.remove('active');
			});
		});
	}

	const authFormTabs = d.querySelectorAll('.js-auth-form-checkbox');
	if (authFormTabs != null) {
		authFormTabs.forEach((checkbox) => {
			checkbox.addEventListener('change', (e) => {
				const index = Number(e.target.getAttribute('data-index'));
				const block = e.target.getAttribute('data-block');
				d.querySelector('.auth-form-tabs-content.active').classList.remove('active');
				d.querySelectorAll('.auth-form-tabs-content')[index].classList.add('active');
				d.querySelector('.auth-form-submit.js-change-block').setAttribute('data-block', block);
			})
		});
	}

	const modalOpenBtn = d.querySelectorAll('.js-modal-open');
	if (modalOpenBtn != null) {
		modalOpenBtn.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				const modalName = e.target.getAttribute('data-modal');
				d.querySelector(`.modal-container[data-modal=${modalName}]`).classList.add('active');
			});
		});
	}

	const modalCloseBtn = d.querySelectorAll('.js-modal-close');
	if (modalCloseBtn != null) {
		modalCloseBtn.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				e.target.closest('.modal-container').classList.remove('active');
			});
		});
	}

	const validateInput = d.querySelector('.js-validate-input');
	if (validateInput != null) {
		validateInput.addEventListener('click', (e) => {
			const input = d.querySelector('.auth-form-tabs-content.active').querySelector('input');
			const inputValue = input.value;
			const trimInputValue = inputValue.trim();
			
			if (trimInputValue.length == 0) {
				e.target.classList.add('invalid');
				input.classList.add('is-invalid');
			} else {
				e.target.classList.remove('invalid');
				input.classList.remove('is-invalid');
			}
		});
	}

	const changeAuthBlockBtn = d.querySelectorAll('.js-change-block');
	if (changeAuthBlockBtn != null) {
		changeAuthBlockBtn.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				const block = e.target.getAttribute('data-block');
				if (!e.target.classList.contains('invalid')) {
					d.querySelector('.auth-block.active').classList.remove('active');
					d.querySelector(`.auth-block[data-block=${block}]`).classList.add('active');
				}
			})
		});
	}
	
}(window, document));