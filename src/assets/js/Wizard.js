"use strict";

// Class definition
var KTWizard3 = function () {
	// Base elements
	var _wizardEl;
	var _formEl;
	var _wizardObj;
	var _validations = [];

	// Private functions
	var _initWizard = function () {
		// Initialize form wizard
		_wizardObj = new KTWizard(_wizardEl, {
			startStep: 1, // initial active step number
			clickableSteps: true  // allow step clicking
		});

		// Validation before going to next page
		_wizardObj.on('change', function (wizard) {
			if (wizard.getStep() > wizard.getNewStep()) {
				return; // Skip if stepped back
			}

			// Validate form before change wizard step
			var validator = _validations[wizard.getStep() - 1]; // get validator for currnt step

			if (validator) {
				validator.validate().then(function (status) {
					if (status == 'Valid') {
						wizard.goTo(wizard.getNewStep());

						KTUtil.scrollTop();
					} else {
						Swal.fire({
							text: "Sorry, looks like there are some errors detected, please try again.",
							icon: "error",
							buttonsStyling: false,
							confirmButtonText: "Ok, got it!",
							customClass: {
								confirmButton: "btn font-weight-bold btn-light"
							}
						}).then(function () {
							KTUtil.scrollTop();
						});
					}
				});
			}

			return false;  // Do not change wizard step, further action will be handled by he validator
		});

		// Change event
		_wizardObj.on('changed', function (wizard) {
			KTUtil.scrollTop();
		});

		// Submit event
		_wizardObj.on('submit', function (wizard) {
			Swal.fire({
				text: "All is good! Please confirm the form submission.",
				icon: "success",
				showCancelButton: true,
				buttonsStyling: false,
				confirmButtonText: "Yes, submit!",
				cancelButtonText: "No, cancel",
				customClass: {
					confirmButton: "btn font-weight-bold btn-primary",
					cancelButton: "btn font-weight-bold btn-default"
				}
			}).then(function (result) {
				if (result.value) {
					_formEl.submit(); // Submit form
				} else if (result.dismiss === 'cancel') {
					Swal.fire({
						text: "Your form has not been submitted!.",
						icon: "error",
						buttonsStyling: false,
						confirmButtonText: "Ok, got it!",
						customClass: {
							confirmButton: "btn font-weight-bold btn-primary",
						}
					});
				}
			});
		});
	}

	var _initValidation = function () {
		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		// Step 1
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				fields: {
					address1: {
						validators: {
							notEmpty: {
								message: 'Address is required'
							}
						}
					},
					postcode: {
						validators: {
							notEmpty: {
								message: 'Postcode is required'
							}
						}
					},
					city: {
						validators: {
							notEmpty: {
								message: 'City is required'
							}
						}
					},
					state: {
						validators: {
							notEmpty: {
								message: 'State is required'
							}
						}
					},
					country: {
						validators: {
							notEmpty: {
								message: 'Country is required'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		));

		// Step 2
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				fields: {
					package: {
						validators: {
							notEmpty: {
								message: 'Package details is required'
							}
						}
					},
					weight: {
						validators: {
							notEmpty: {
								message: 'Package weight is required'
							},
							digits: {
								message: 'The value added is not valid'
							}
						}
					},
					width: {
						validators: {
							notEmpty: {
								message: 'Package width is required'
							},
							digits: {
								message: 'The value added is not valid'
							}
						}
					},
					height: {
						validators: {
							notEmpty: {
								message: 'Package height is required'
							},
							digits: {
								message: 'The value added is not valid'
							}
						}
					},
					packagelength: {
						validators: {
							notEmpty: {
								message: 'Package length is required'
							},
							digits: {
								message: 'The value added is not valid'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		));

		// Step 3
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				fields: {
					delivery: {
						validators: {
							notEmpty: {
								message: 'Delivery type is required'
							}
						}
					},
					packaging: {
						validators: {
							notEmpty: {
								message: 'Packaging type is required'
							}
						}
					},
					preferreddelivery: {
						validators: {
							notEmpty: {
								message: 'Preferred delivery window is required'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		));

		// Step 4
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				fields: {
					locaddress1: {
						validators: {
							notEmpty: {
								message: 'Address is required'
							}
						}
					},
					locpostcode: {
						validators: {
							notEmpty: {
								message: 'Postcode is required'
							}
						}
					},
					loccity: {
						validators: {
							notEmpty: {
								message: 'City is required'
							}
						}
					},
					locstate: {
						validators: {
							notEmpty: {
								message: 'State is required'
							}
						}
					},
					loccountry: {
						validators: {
							notEmpty: {
								message: 'Country is required'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		));
	}

	return {
		// public functions
		init: function () {
			_wizardEl = KTUtil.getById('kt_wizard');
			_formEl = KTUtil.getById('kt_form');

			_initWizard();
			_initValidation();
		}
	};
}();

jQuery(document).ready(function () {
	KTWizard3.init();
});

// Class definition
var KTSelect2 = function() {
 // Private functions
 var demos = function() {
  // basic
  $('#kt_select2_1').select2({
   placeholder: "Select a state"
  });

  // nested
  $('#kt_select2_2').select2({
   placeholder: "Select a state"
  });

  // multi select
  $('#kt_select2_3').select2({
   placeholder: "Select a state",
  });

  // basic
  $('#kt_select2_4').select2({
   placeholder: "Select a state",
   allowClear: true
  });

  // loading data from array
  var data = [{
   id: 0,
   text: 'Enhancement'
  }, {
   id: 1,
   text: 'Bug'
  }, {
   id: 2,
   text: 'Duplicate'
  }, {
   id: 3,
   text: 'Invalid'
  }, {
   id: 4,
   text: 'Wontfix'
  }];

  $('#kt_select2_5').select2({
   placeholder: "Select a value",
   data: data
  });

  // loading remote data

  function formatRepo(repo) {
   if (repo.loading) return repo.text;
   var markup = "<div class='select2-result-repository clearfix'>" +
    "<div class='select2-result-repository__meta'>" +
    "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";
   if (repo.description) {
    markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
   }
   markup += "<div class='select2-result-repository__statistics'>" +
    "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
    "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
    "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
    "</div>" +
    "</div></div>";
   return markup;
  }

  function formatRepoSelection(repo) {
   return repo.full_name || repo.text;
  }

  $("#kt_select2_6").select2({
   placeholder: "Search for git repositories",
   allowClear: true,
   ajax: {
    url: "https://api.github.com/search/repositories",
    dataType: 'json',
    delay: 250,
    data: function(params) {
     return {
      q: params.term, // search term
      page: params.page
     };
    },
    processResults: function(data, params) {
     // parse the results into the format expected by Select2
     // since we are using custom formatting functions we do not need to
     // alter the remote JSON data, except to indicate that infinite
     // scrolling can be used
     params.page = params.page || 1;

     return {
      results: data.items,
      pagination: {
       more: (params.page * 30) < data.total_count
      }
     };
    },
    cache: true
   },
   escapeMarkup: function(markup) {
    return markup;
   }, // let our custom formatter work
   minimumInputLength: 1,
   templateResult: formatRepo, // omitted for brevity, see the source of this page
   templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
  });

  // custom styles

  // tagging support
  $('#kt_select2_12_1, #kt_select2_12_2, #kt_select2_12_3, #kt_select2_12_4').select2({
   placeholder: "Select an option",
  });

  // disabled mode
  $('#kt_select2_7').select2({
   placeholder: "Select an option"
  });

  // disabled results
  $('#kt_select2_8').select2({
   placeholder: "Select an option"
  });

  // limiting the number of selections
  $('#kt_select2_9').select2({
   placeholder: "Select an option",
   maximumSelectionLength: 2
  });

  // hiding the search box
  $('#kt_select2_10').select2({
   placeholder: "Select an option",
   minimumResultsForSearch: Infinity
  });

  // tagging support
  $('#kt_select2_11').select2({
   placeholder: "Add a tag",
   tags: true
  });

  // disabled results
  $('.kt-select2-general').select2({
   placeholder: "Select an option"
  });
 }

 var modalDemos = function() {
  $('#kt_select2_modal').on('shown.bs.modal', function () {
   // basic
   $('#kt_select2_1_modal').select2({
    placeholder: "Select a state"
   });

   // nested
   $('#kt_select2_2_modal').select2({
    placeholder: "Select a state"
   });

   // multi select
   $('#kt_select2_3_modal').select2({
    placeholder: "Select a state",
   });

   // basic
   $('#kt_select2_4_modal').select2({
    placeholder: "Select a state",
    allowClear: true
   });
  });
 }

 // Public functions
 return {
  init: function() {
   demos();
   modalDemos();
  }
 };
}();

// Initialization
jQuery(document).ready(function() {
 KTSelect2.init();
});

// MULTI SELECT

// Class definition
var KTSelect2 = function() {
	// Private functions
	var demos = function() {
	 // basic
	 $('#kt_select2_1').select2({
	  placeholder: "Select a state"
	 });
   
	 // nested
	 $('#kt_select2_2').select2({
	  placeholder: "Select a state"
	 });
   
	 // multi select
	 $('#kt_select2_3').select2({
	  placeholder: "Select a state",
	 });
   
	 // basic
	 $('#kt_select2_4').select2({
	  placeholder: "Select a state",
	  allowClear: true
	 });
   
	 // loading data from array
	 var data = [{
	  id: 0,
	  text: 'Enhancement'
	 }, {
	  id: 1,
	  text: 'Bug'
	 }, {
	  id: 2,
	  text: 'Duplicate'
	 }, {
	  id: 3,
	  text: 'Invalid'
	 }, {
	  id: 4,
	  text: 'Wontfix'
	 }];
   
	 $('#kt_select2_5').select2({
	  placeholder: "Select a value",
	  data: data
	 });
   
	 // loading remote data
   
	 function formatRepo(repo) {
	  if (repo.loading) return repo.text;
	  var markup = "<div class='select2-result-repository clearfix'>" +
	   "<div class='select2-result-repository__meta'>" +
	   "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";
	  if (repo.description) {
	   markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
	  }
	  markup += "<div class='select2-result-repository__statistics'>" +
	   "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
	   "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
	   "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
	   "</div>" +
	   "</div></div>";
	  return markup;
	 }
   
	 function formatRepoSelection(repo) {
	  return repo.full_name || repo.text;
	 }
   
	 $("#kt_select2_6").select2({
	  placeholder: "Search for git repositories",
	  allowClear: true,
	  ajax: {
	   url: "https://api.github.com/search/repositories",
	   dataType: 'json',
	   delay: 250,
	   data: function(params) {
		return {
		 q: params.term, // search term
		 page: params.page
		};
	   },
	   processResults: function(data, params) {
		// parse the results into the format expected by Select2
		// since we are using custom formatting functions we do not need to
		// alter the remote JSON data, except to indicate that infinite
		// scrolling can be used
		params.page = params.page || 1;
   
		return {
		 results: data.items,
		 pagination: {
		  more: (params.page * 30) < data.total_count
		 }
		};
	   },
	   cache: true
	  },
	  escapeMarkup: function(markup) {
	   return markup;
	  }, // let our custom formatter work
	  minimumInputLength: 1,
	  templateResult: formatRepo, // omitted for brevity, see the source of this page
	  templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
	 });
   
	 // custom styles
   
	 // tagging support
	 $('#kt_select2_12_1, #kt_select2_12_2, #kt_select2_12_3, #kt_select2_12_4').select2({
	  placeholder: "Select an option",
	 });
   
	 // disabled mode
	 $('#kt_select2_7').select2({
	  placeholder: "Select an option"
	 });
   
	 // disabled results
	 $('#kt_select2_8').select2({
	  placeholder: "Select an option"
	 });
   
	 // limiting the number of selections
	 $('#kt_select2_9').select2({
	  placeholder: "Select an option",
	  maximumSelectionLength: 2
	 });
   
	 // hiding the search box
	 $('#kt_select2_10').select2({
	  placeholder: "Select an option",
	  minimumResultsForSearch: Infinity
	 });
   
	 // tagging support
	 $('#kt_select2_11').select2({
	  placeholder: "Add a tag",
	  tags: true
	 });
   
	 // disabled results
	 $('.kt-select2-general').select2({
	  placeholder: "Select an option"
	 });
	}
   
	var modalDemos = function() {
	 $('#kt_select2_modal').on('shown.bs.modal', function () {
	  // basic
	  $('#kt_select2_1_modal').select2({
	   placeholder: "Select a state"
	  });
   
	  // nested
	  $('#kt_select2_2_modal').select2({
	   placeholder: "Select a state"
	  });
   
	  // multi select
	  $('#kt_select2_3_modal').select2({
	   placeholder: "Select a state",
	  });
   
	  // basic
	  $('#kt_select2_4_modal').select2({
	   placeholder: "Select a state",
	   allowClear: true
	  });
	 });
	}
   
	// Public functions
	return {
	 init: function() {
	  demos();
	  modalDemos();
	 }
	};
   }();
   
   // Initialization
   jQuery(document).ready(function() {
	KTSelect2.init();
   });