package ui.Projects;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CreateProjectPage {
    private final WebDriver driver;

    public CreateProjectPage(WebDriver driver) {
        this.driver = driver;
    }

    By backToListButton = By.id("link-to-list");
    By createTitleField = By.id("create-project-title");
    By createDescField = By.id("create-project-descr");
    By createProjectButton = By.id("create-btn");
    By cancelOfCreatingProjectButton = By.id("create-project-resetBtn");



    public CreateProjectPage clickCancelOfCreatingProjectButton() {
        driver.findElement(cancelOfCreatingProjectButton).click();
        return this;
    }
    public CreateProjectPage clickCreateProjectButton() {
        driver.findElement(createProjectButton).click();
        return this;
    }

    public CreateProjectPage clickBackToList() {
        driver.findElement(backToListButton).click();
        return this;
    }

    public CreateProjectPage typeTitle (String title) {
        driver.findElement(createTitleField).sendKeys(title);
        return this;
    }

    public CreateProjectPage typeDesc (String Desc) {
        driver.findElement(createDescField).sendKeys(Desc);
        return this;
    }
}
