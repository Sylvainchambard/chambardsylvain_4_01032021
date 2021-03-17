!function(a){var e=[],t={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(r){var o=a.extend(!0,{},t);o.options=a.extend(!0,o.options,r);var s=a.unique(this.map((function(){return a(this).parents("form")[0]})).toArray());return a(s).bind("submit",(function(e){var t=a(this),i=0,n=t.find("input,textarea,select").not("[type=submit],[type=image]").filter(o.options.filter);n.trigger("submit.validation").trigger("validationLostFocus.validation"),n.each((function(e,t){var n=a(t).parents(".form-group, .checkbox").first();n.hasClass("warning")&&(n.removeClass("warning").addClass("error"),i++)})),n.trigger("validationLostFocus.validation"),i?(o.options.preventSubmit&&e.preventDefault(),t.addClass("error"),a.isFunction(o.options.submitError)&&o.options.submitError(t,e,n.jqBootstrapValidation("collectErrors",!0))):(t.removeClass("error"),a.isFunction(o.options.submitSuccess)&&o.options.submitSuccess(t,e))})),this.each((function(){var t=a(this),r=t.parents(".form-group, .checkbox").first(),s=r.find(".help-block").first(),l=t.parents("form").first(),d=[];if(!s.length&&o.options.autoAdd&&o.options.autoAdd.helpBlocks&&(s=a('<div class="help-block" />'),r.append(s),e.push(s[0])),o.options.sniffHtml){var c="";if(void 0!==t.attr("pattern")&&(c="Pas dans le format attendu\x3c!-- data-validation-pattern-message to override --\x3e",t.data("validationPatternMessage")&&(c=t.data("validationPatternMessage")),t.data("validationPatternMessage",c),t.data("validationPatternRegex",t.attr("pattern"))),void 0!==t.attr("max")||void 0!==t.attr("aria-valuemax")){var m=void 0!==t.attr("max")?t.attr("max"):t.attr("aria-valuemax");c="Too high: Maximum of '"+m+"'\x3c!-- data-validation-max-message to override --\x3e",t.data("validationMaxMessage")&&(c=t.data("validationMaxMessage")),t.data("validationMaxMessage",c),t.data("validationMaxMax",m)}if(void 0!==t.attr("min")||void 0!==t.attr("aria-valuemin")){var u=void 0!==t.attr("min")?t.attr("min"):t.attr("aria-valuemin");c="Trop bas: minimum de '"+u+"'\x3c!-- data-validation-min-message to override --\x3e",t.data("validationMinMessage")&&(c=t.data("validationMinMessage")),t.data("validationMinMessage",c),t.data("validationMinMin",u)}void 0!==t.attr("maxlength")&&(c="Trop long: maximum de '"+t.attr("maxlength")+"' characters\x3c!-- data-validation-maxlength-message to override --\x3e",t.data("validationMaxlengthMessage")&&(c=t.data("validationMaxlengthMessage")),t.data("validationMaxlengthMessage",c),t.data("validationMaxlengthMaxlength",t.attr("maxlength"))),void 0!==t.attr("minlength")&&(c="Trop court: minimum de'"+t.attr("minlength")+"' characters\x3c!-- data-validation-minlength-message to override --\x3e",t.data("validationMinlengthMessage")&&(c=t.data("validationMinlengthMessage")),t.data("validationMinlengthMessage",c),t.data("validationMinlengthMinlength",t.attr("minlength"))),void 0===t.attr("required")&&void 0===t.attr("aria-required")||(c=o.builtInValidators.required.message,t.data("validationRequiredMessage")&&(c=t.data("validationRequiredMessage")),t.data("validationRequiredMessage",c)),void 0!==t.attr("type")&&"number"===t.attr("type").toLowerCase()&&(c=o.builtInValidators.number.message,t.data("validationNumberMessage")&&(c=t.data("validationNumberMessage")),t.data("validationNumberMessage",c)),void 0!==t.attr("type")&&"email"===t.attr("type").toLowerCase()&&(c="Adresse e-mail incorect\x3c!-- data-validator-validemail-message to override --\x3e",t.data("validationValidemailMessage")?c=t.data("validationValidemailMessage"):t.data("validationEmailMessage")&&(c=t.data("validationEmailMessage")),t.data("validationValidemailMessage",c)),void 0!==t.attr("minchecked")&&(c="Pas assez d'options vérifiées; Minimum de '"+t.attr("minchecked")+"' required\x3c!-- data-validation-minchecked-message to override --\x3e",t.data("validationMincheckedMessage")&&(c=t.data("validationMincheckedMessage")),t.data("validationMincheckedMessage",c),t.data("validationMincheckedMinchecked",t.attr("minchecked"))),void 0!==t.attr("maxchecked")&&(c="Trop d'options cochées; Maximum de '"+t.attr("maxchecked")+"' required\x3c!-- data-validation-maxchecked-message to override --\x3e",t.data("validationMaxcheckedMessage")&&(c=t.data("validationMaxcheckedMessage")),t.data("validationMaxcheckedMessage",c),t.data("validationMaxcheckedMaxchecked",t.attr("maxchecked")))}void 0!==t.data("validation")&&(d=t.data("validation").split(",")),a.each(t.data(),(function(a,e){var t=a.replace(/([A-Z])/g,",$1").split(",");"validation"===t[0]&&t[1]&&d.push(t[1])}));var v=d,g=[];do{a.each(d,(function(a,e){d[a]=i(e)})),d=a.unique(d),g=[],a.each(v,(function(e,n){if(void 0!==t.data("validation"+n+"Shortcut"))a.each(t.data("validation"+n+"Shortcut").split(","),(function(a,e){g.push(e)}));else if(o.builtInValidators[n.toLowerCase()]){var r=o.builtInValidators[n.toLowerCase()];"shortcut"===r.type.toLowerCase()&&a.each(r.shortcut.split(","),(function(a,e){e=i(e),g.push(e),d.push(e)}))}})),v=g}while(v.length>0);var h={};a.each(d,(function(e,n){var r=t.data("validation"+n+"Message"),s=void 0!==r,l=!1;if(r=r||"'"+n+"' validation failed \x3c!-- Add attribute 'data-validation-"+n.toLowerCase()+"-message' to input to change this message --\x3e",a.each(o.validatorTypes,(function(e,o){void 0===h[e]&&(h[e]=[]),l||void 0===t.data("validation"+n+i(o.name))||(h[e].push(a.extend(!0,{name:i(o.name),message:r},o.init(t,n))),l=!0)})),!l&&o.builtInValidators[n.toLowerCase()]){var d=a.extend(!0,{},o.builtInValidators[n.toLowerCase()]);s&&(d.message=r);var c=d.type.toLowerCase();"shortcut"===c?l=!0:a.each(o.validatorTypes,(function(e,r){void 0===h[e]&&(h[e]=[]),l||c!==e.toLowerCase()||(t.data("validation"+n+i(r.name),d[r.name.toLowerCase()]),h[c].push(a.extend(d,r.init(t,n))),l=!0)}))}l||a.error("Cannot find validation info for '"+n+"'")})),s.data("original-contents",s.data("original-contents")?s.data("original-contents"):s.html()),s.data("original-role",s.data("original-role")?s.data("original-role"):s.attr("role")),r.data("original-classes",r.data("original-clases")?r.data("original-classes"):r.attr("class")),t.data("original-aria-invalid",t.data("original-aria-invalid")?t.data("original-aria-invalid"):t.attr("aria-invalid")),t.bind("validation.validation",(function(e,i){var r=n(t),s=[];return a.each(h,(function(e,n){(r||r.length||i&&i.includeEmpty||o.validatorTypes[e].blockSubmit&&i&&i.submitting)&&a.each(n,(function(a,i){o.validatorTypes[e].validate(t,r,i)&&s.push(i.message)}))})),s})),t.bind("getValidators.validation",(function(){return h})),t.bind("submit.validation",(function(){return t.triggerHandler("change.validation",{submitting:!0})})),t.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",(function(e,i){var d=n(t),c=[];r.find("input,textarea,select").each((function(e,n){var r=c.length;if(a.each(a(n).triggerHandler("validation.validation",i),(function(a,e){c.push(e)})),c.length>r)a(n).attr("aria-invalid","true");else{var o=t.data("original-aria-invalid");a(n).attr("aria-invalid",void 0!==o&&o)}})),l.find("input,select,textarea").not(t).not('[name="'+t.attr("name")+'"]').trigger("validationLostFocus.validation"),(c=a.unique(c.sort())).length?(r.removeClass("success error").addClass("warning"),o.options.semanticallyStrict&&1===c.length?s.html(c[0]+(o.options.prependExistingHelpBlock?s.data("original-contents"):"")):s.html('<ul class="list-unstyled alert alert-warning" role="alert"><li>'+c.join("</li><li>")+"</li></ul>"+(o.options.prependExistingHelpBlock?s.data("original-contents"):""))):(r.removeClass("warning error success"),d.length>0&&r.addClass("success"),s.html(s.data("original-contents"))),"blur"===e.type&&r.removeClass("success")})),t.bind("validationLostFocus.validation",(function(){r.removeClass("success")}))}))},destroy:function(){return this.each((function(){var t=a(this),i=t.parents(".form-group, .checkbox").first(),n=i.find(".help-block").first();t.unbind(".validation"),n.html(n.data("original-contents")),i.attr("class",i.data("original-classes")),t.attr("aria-invalid",t.data("original-aria-invalid")),n.attr("role",t.data("original-role")),e.indexOf(n[0])>-1&&n.remove()}))},collectErrors:function(e){var t={};return this.each((function(e,i){var n=a(i),r=n.attr("name"),o=n.triggerHandler("validation.validation",{includeEmpty:!0});t[r]=a.extend(!0,o,t[r])})),a.each(t,(function(a,e){0===e.length&&delete t[a]})),t},hasErrors:function(){var e=[];return this.each((function(t,i){e=e.concat(a(i).triggerHandler("getValidators.validation")?a(i).triggerHandler("validation.validation",{submitting:!0}):[])})),e.length>0},override:function(e){t=a.extend(!0,t,e)}},validatorTypes:{callback:{name:"callback",init:function(a,e){return{validatorName:e,callback:a.data("validation"+e+"Callback"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(a,e,t){if(t.lastValue===e&&t.lastFinished)return!t.lastValid;if(!0===t.lastFinished){t.lastValue=e,t.lastValid=!0,t.lastFinished=!1;var i=t,n=a;!function(a,e){for(var t=Array.prototype.slice.call(arguments).splice(2),i=a.split("."),n=i.pop(),r=0;r<i.length;r++)e=e[i[r]];e[n].apply(this,t)}(t.callback,window,a,e,(function(a){i.lastValue===a.value&&(i.lastValid=a.valid,a.message&&(i.message=a.message),i.lastFinished=!0,n.data("validation"+i.validatorName+"Message",i.message),setTimeout((function(){n.trigger("change.validation")}),1))}))}return!1}},ajax:{name:"ajax",init:function(a,e){return{validatorName:e,url:a.data("validation"+e+"Ajax"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(e,t,i){return""+i.lastValue==""+t&&!0===i.lastFinished?!1===i.lastValid:(!0===i.lastFinished&&(i.lastValue=t,i.lastValid=!0,i.lastFinished=!1,a.ajax({url:i.url,data:"value="+t+"&field="+e.attr("name"),dataType:"json",success:function(a){""+i.lastValue==""+a.value&&(i.lastValid=!!a.valid,a.message&&(i.message=a.message),i.lastFinished=!0,e.data("validation"+i.validatorName+"Message",i.message),setTimeout((function(){e.trigger("change.validation")}),1))},failure:function(){i.lastValid=!0,i.message="ajax call failed",i.lastFinished=!0,e.data("validation"+i.validatorName+"Message",i.message),setTimeout((function(){e.trigger("change.validation")}),1)}})),!1)}},regex:{name:"regex",init:function(a,e){return{regex:(t=a.data("validation"+e+"Regex"),new RegExp("^"+t+"$"))};var t},validate:function(a,e,t){return!t.regex.test(e)&&!t.negative||t.regex.test(e)&&t.negative}},required:{name:"required",init:function(a,e){return{}},validate:function(a,e,t){return!(0!==e.length||t.negative)||!!(e.length>0&&t.negative)},blockSubmit:!0},match:{name:"match",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.data("validation"+e+"Match")+'"]').first();return t.bind("validation.validation",(function(){a.trigger("change.validation",{submitting:!0})})),{element:t}},validate:function(a,e,t){return e!==t.element.val()&&!t.negative||e===t.element.val()&&t.negative},blockSubmit:!0},max:{name:"max",init:function(a,e){return{max:a.data("validation"+e+"Max")}},validate:function(a,e,t){return parseFloat(e,10)>parseFloat(t.max,10)&&!t.negative||parseFloat(e,10)<=parseFloat(t.max,10)&&t.negative}},min:{name:"min",init:function(a,e){return{min:a.data("validation"+e+"Min")}},validate:function(a,e,t){return parseFloat(e)<parseFloat(t.min)&&!t.negative||parseFloat(e)>=parseFloat(t.min)&&t.negative}},maxlength:{name:"maxlength",init:function(a,e){return{maxlength:a.data("validation"+e+"Maxlength")}},validate:function(a,e,t){return e.length>t.maxlength&&!t.negative||e.length<=t.maxlength&&t.negative}},minlength:{name:"minlength",init:function(a,e){return{minlength:a.data("validation"+e+"Minlength")}},validate:function(a,e,t){return e.length<t.minlength&&!t.negative||e.length>=t.minlength&&t.negative}},maxchecked:{name:"maxchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",(function(){a.trigger("change.validation",{includeEmpty:!0})})),{maxchecked:a.data("validation"+e+"Maxchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length>t.maxchecked&&!t.negative||t.elements.filter(":checked").length<=t.maxchecked&&t.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",(function(){a.trigger("change.validation",{includeEmpty:!0})})),{minchecked:a.data("validation"+e+"Minchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length<t.minchecked&&!t.negative||t.elements.filter(":checked").length>=t.minchecked&&t.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,10}",message:"Adresse mail invalide\x3c!-- data-validator-validemail-message to override --\x3e"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Ne correspond pas au mot de passe donné\x3c!-- data-validator-paswordagain-message to override --\x3e"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",message:"Doit être un nombre\x3c!-- data-validator-number-message to override --\x3e"},integer:{name:"Integer",type:"regex",regex:"[+-]?\\d+",message:"Aucune décimale autorisée\x3c!-- data-validator-integer-message to override --\x3e"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Doit être un nombre positif\x3c!-- data-validator-positivenumber-message to override --\x3e"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Doit être un nombre négatif\x3c!-- data-validator-negativenumber-message to override --\x3e"},required:{name:"Required",type:"required",message:"Ceci est nécessaire\x3c!-- data-validator-required-message to override --\x3e"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Cochez au moins une option\x3c!-- data-validation-checkone-message to override --\x3e"}}},i=function(a){return a.toLowerCase().replace(/(^|\s)([a-z])/g,(function(a,e,t){return e+t.toUpperCase()}))},n=function(e){var t=e.val(),i=e.attr("type");return"checkbox"===i&&(t=e.is(":checked")?t:""),"radio"===i&&(t=a('input[name="'+e.attr("name")+'"]:checked').length>0?t:""),t};a.fn.jqBootstrapValidation=function(e){return t.methods[e]?t.methods[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?(a.error("Method "+e+" does not exist on jQuery.jqBootstrapValidation"),null):t.methods.init.apply(this,arguments)},a.jqBootstrapValidation=function(e){a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}}(jQuery);