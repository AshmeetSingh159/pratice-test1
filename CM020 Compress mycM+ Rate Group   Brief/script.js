function handleMutations(mutationsList, observer) {
    mutationsList.forEach(mutation => {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.classList.contains('rate-group') && containsSpecificHeader(node)) {
                        var childElement = node.querySelector('.rate');
                        childElement.style.display = 'none';
                        var newHTML = '<div class="membership-menu"><button id="View-Membership">View membership rates</button></div>';
                        node.insertAdjacentHTML('beforeend', newHTML);

                        var togglebutton = node.querySelector('#View-Membership');
                        togglebutton.addEventListener('click', function() {
                            if (childElement.style.display === 'none') {
                                childElement.style.display = 'block';
                            } else {
                                childElement.style.display = 'none';
                            }
                        });
                    }
                }
            });
        }
    });
}


function containsSpecificHeader(node) {
    var headerElement = node.querySelector('.rate-group__header h3');
    return headerElement && headerElement.textContent && headerElement.textContent.trim() === 'mycitizenM+ rates';
}
const observer = new MutationObserver(handleMutations);
const targetNode = document.body;
const observerOptions = { childList: true, subtree: true };
observer.observe(targetNode, observerOptions);