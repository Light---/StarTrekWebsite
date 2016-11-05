function getCheckInfo() {
            var userName;
			
			var checkGender;
			
			var checkAddress1;
			var checkAddress2;
			var checkAddress3;
			var checkAddressMobile;
			var checkAddressHome;
			
			var checkComment;
			
			userName = document.getElementById("uname");
			
			checkGender = document.getElementById("gender").value;
			document.getElementById("checkGender").innerHTML = x;
			
			
			checkAddress1 = document.getElementById("add1").value;
			checkAddress2 = document.getElementById("add2").value;
			checkAddress3 = document.getElementById("add3").value;
			checkAddressMobile = document.getElementById("mphone").value;
			checkAddressHome = document.getElementById("hphone").value;
			
	
			checkComment = document.getElementById("comment").value;

			var outputInfo = document.createElement("p");
			outputInfo.id="outputInfo";
			outputInfo.textContent= "Thank you for you comment " + userName.value +
			"! Please confirm your comments below before they are submitted." + checkGender + ", " + checkAddress1 + ", " + checkAddress2 +
			", " + checkAddress3 + ", " + checkAddressMobile + ", " + checkAddressHome + ", " + checkComment;
			
			var displayInfo = document.getElementById("CheckInfo");
			displayInfo.appendChild(outputInfo);

        }  