function convertSequence() {
    var inputSequence = document.getElementById("sequence").value.toUpperCase();
    var sequenceType = document.getElementById("type").value;
    var resultElement = document.getElementById("result");

    if (!isValidSequence(inputSequence, sequenceType)) {
        resultElement.textContent = "Error: Invalid sequence for the selected type. Make sure that there are not any spaces or other useless characters in the input and that you have selected the correct type.";
        return;
    }

    var A = 0, T = 0, G = 0, C = 0;

    for (var i = 0; i < inputSequence.length; i++) {
        var currentBase = inputSequence[i];
        if (sequenceType === "dna") {
            if (currentBase === "A") {
                A++;
            } else if (currentBase === "T") {
                T++;
            } else if (currentBase === "G") {
                G++;
            } else if (currentBase === "C") {
                C++;
            }
        } else if (sequenceType === "rna") {
            if (currentBase === "A") {
                A++;
            } else if (currentBase === "U") {
                T++; // Counting U as T for RNA
            } else if (currentBase === "G") {
                G++;
            } else if (currentBase === "C") {
                C++;
            }
        }
    }

    resultElement.textContent = `A: ${A}, C: ${C}, G: ${G}, ${sequenceType === "dna" ? "T" : "U"}: ${T}`;
}

function isValidSequence(sequence, type) {
    var validBases;

    if (type === "dna") {
        validBases = /^[ATCG]*$/;
    } else if (type === "rna") {
        validBases = /^[AUCG]*$/;
    } else {
        return false;
    }

    return validBases.test(sequence);
}
