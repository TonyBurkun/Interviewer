package ui;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ProjectsPage {

    private final WebDriver driver;

    public ProjectsPage(WebDriver driver) {
        this.driver = driver;
    }

    By createProjectButton = By.xpath("//*[@id=\"pl-link-to-create\"]/button");


    public ProjectsPage clickCreateProjectButton() {
        driver.findElement(createProjectButton).click();
        return this;
    }



}

