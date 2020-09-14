export const timeAssetMapping = (asset, remainingTime) => {
  switch (asset) {
    case 'days': {
      return Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    }
    case 'hours': {
      return Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
    }
    case 'minutes': {
      return Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    }
    default: {
      return Math.floor((remainingTime % (1000 * 60)) / 1000);
    }
  }
};

// If the count down is finished, write some text
/* if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
  } */

export const valueVisualization = (label, value) => {
  let pretifiedValue;
  if (label !== 'hours') {
    pretifiedValue = value === 60 ? 59 : value;
  } else {
    pretifiedValue = value === 24 ? 23 : value;
  }

  if (pretifiedValue < 10) {
    return `0${pretifiedValue}`;
  }

  return `${pretifiedValue}`;
};
