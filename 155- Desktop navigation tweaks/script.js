
function handleMutations(mutationsList, observer) {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'childList') {
        const navContainer = document.querySelector('.main-nav__list-new.main-col.header-category.shop-by-departement');
        
        if (navContainer) {
          const thirdColumn = navContainer.querySelector('.meganav-col:nth-child(3)');
          if (thirdColumn) {
            thirdColumn.style.gridColumn = "3/8";
          }
        }
      }
    });
  }
  const observer = new MutationObserver(handleMutations);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  