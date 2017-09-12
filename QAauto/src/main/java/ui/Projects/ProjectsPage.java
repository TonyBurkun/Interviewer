package ui.Projects;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ProjectsPage {

    private final WebDriver driver;

    public ProjectsPage(WebDriver driver) {
        this.driver = driver;
    }

    By mainCreateProjectButton = By.xpath("//*[@id=\"pl-link-to-create\"]/button");
    By createProjectTitleField = By.id("create-project-title");
    By createProjectDescrField = By.id("create-project-descr");
    By backToListButton = By.id("link-to-list");
    By finalCeateProjectButton = By.id("create-project-submitBtn");
    By cancelButton = By.id("create-project-resetBtn");
    By someProjectButton = By.id("pl-link-to-project");

    By editProjectButton = By.id("pd-btn-to-edit");
    By deleteProjectButton = By.id("pd-btn-to-delete");
    By saveAftterEditButton = By.id("pe-btn-save");
    By cancelAftterEditButton = By.id("pe-btn-cancel");

    By editPopup = By.xpath("/html/body/div[2]/div/div[2]/div/div/div[2]");
    By cancelEditPopup = By.xpath("/html/body/div[2]/div/div[2]/div/div/div[1]/button/span[1]");
    By cancelEditPopupButton = By.id("pe-btn-modal-cancel");
    By backToEditButton = By.id("pe-btn-modal-back");



    public ProjectsPage clickBackToEditButton() {
        driver.findElement(backToEditButton).click();
        return this;
    }

    public ProjectsPage clickCancelEditPopupButton() {
        driver.findElement(cancelEditPopupButton).click();
        return this;
    }
    public ProjectsPage clickCancelAftterEdit() {
        driver.findElement(cancelAftterEditButton).click();
        return this;
    }

    public ProjectsPage clickSaveAftterEditButton() {
        driver.findElement(saveAftterEditButton).click();
        return this;
    }
    public ProjectsPage clickDeleteProjectButton() {
        driver.findElement(deleteProjectButton).click();
        return this;
    }
    public ProjectsPage clickEditProjectButton() {
        driver.findElement(editProjectButton).click();
        return this;
    }
    public ProjectsPage clickSomeProjectButton() {
        driver.findElement(someProjectButton).click();
        return this;
    }
    public ProjectsPage clickCancelButton() {
        driver.findElement(cancelButton).click();
        return this;
    }
    public ProjectsPage clickFinalCeateProjectButton() {
        driver.findElement(finalCeateProjectButton).click();
        return this;
    }
    public ProjectsPage clickBackToListButton() {
        driver.findElement(backToListButton).click();
        return this;
    }
    public ProjectsPage typeDescr (String descr) {
        driver.findElement(createProjectDescrField).sendKeys(descr);
        return this;
    }
    public ProjectsPage typeTitle(String title) {
        driver.findElement(createProjectTitleField).sendKeys(title);
        return this;
    }

    public ProjectsPage clickMainCreateProjectButton() {
        driver.findElement(mainCreateProjectButton).click();
        return this;
    }

    public ProjectsPage open() {
        driver.get("http://qa-interviewer.herokuapp.com/projects");
        return this;
    }


}

