import fetchData from "./fetchData";
import editData from "./editData";

jest.mock("./fetchData");

describe('Main', () => {
  let getRecipeBtn: HTMLButtonElement;

  beforeEach(() => {
    // Reset DOM sebelum setiap test
    document.body.innerHTML = '';
  });
  afterEach(() => {
    // Clean up event listener and pending promises
    if (getRecipeBtn) {
      getRecipeBtn.removeEventListener('click', async () => {
        await fetchData.getData(editData.editData);
      });
    }
    jest.clearAllMocks();
  });

  it('should call getData when getRecipeBtn is clicked', async () => {
    getRecipeBtn = document.createElement('button');
    getRecipeBtn.id = 'getRecipeBtn';
    document.body.appendChild(getRecipeBtn);

    getRecipeBtn.addEventListener('click', async () => {
      await fetchData.getData(editData.editData);
    });

    getRecipeBtn.click();

    await expect(fetchData.getData).toHaveBeenCalledTimes(1);
    await expect(fetchData.getData).toHaveBeenCalledWith(editData.editData);
  });
});