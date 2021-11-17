import { useState } from 'react';

export default function useCopyRecipeLinkToClipboard(parentPath, recipeID) {
  const [shouldShowCopiedMessage, setShouldShowCopiedMessage] = useState(false);
  let urlType;

  if (parentPath === 'meals') {
    urlType = 'comidas';
  } else {
    urlType = 'bebidas';
  }
  const textToCopy = `http://localhost:3000/${urlType}/${recipeID}`;

  const copyRecipeLinkToClipboard = async () => {
    try {
      await window.navigator.clipboard.writeText(textToCopy);
      setShouldShowCopiedMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return { shouldShowCopiedMessage, copyRecipeLinkToClipboard };
}
