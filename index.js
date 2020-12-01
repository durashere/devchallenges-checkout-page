function checker() {
  if (document.getElementById("email").value === "") {
    document.getElementById("email").style.background = "red"
  } else {
    document.getElementById("email").style.background = "white"
  }

  if (document.getElementById("phone").value === "") {
    document.getElementById("phone").style.background = "red"
  } else {
    document.getElementById("phone").style.background = "white"
  }

  if (document.getElementById("fullname").value === "") {
    document.getElementById("fullname").style.background = "red"
  } else {
    document.getElementById("fullname").style.background = "white"
  }

  if (document.getElementById("address").value === "") {
    document.getElementById("address").style.background = "red"
  } else {
    document.getElementById("address").style.background = "white"
  }

  if (document.getElementById("city").value === "") {
    document.getElementById("city").style.background = "red"
  } else {
    document.getElementById("city").style.background = "white"
  }

  if (document.getElementById("postalcode").value === "") {
    document.getElementById("postalcode").style.background = "red"
  } else {
    document.getElementById("postalcode").style.background = "white"
  }

  let selectedCountry = document.getElementById("country")

  if (
    selectedCountry.options[selectedCountry.selectedIndex].text ===
    "Your country..."
  ) {
    selectedCountry.style.background = "red"
  } else {
    document.getElementById("country").style.background = "white"
  }
}
