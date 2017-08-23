package ui;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SideMenuPage {
    private final WebDriver driver;

    public SideMenuPage(WebDriver driver) {
        this.driver = driver;
    }

    By interviewsItem = By.xpath("//*[@id=\"sidebar-menu\"]/li[1]/a");
    By interviewersItem = By.xpath("//*[@id=\"sidebar-menu\"]/li[2]/a");
    By vacanciesItem = By.xpath("//*[@id=\"sidebar-menu\"]/li[3]/a");
    By seekersItem = By.xpath("//*[@id=\"sidebar-menu\"]/li[4]/a");
    By projectsItem = By.xpath("//*[@id=\"sidebar-menu\"]/li[5]/a");

    By sidebarButton = By.id("sidebar-collapse-btn");


    public SideMenuPage clickProjectsItem() {
        driver.findElement(projectsItem).click();
        return this;
    }
    public SideMenuPage clickSeekersItem() {
        driver.findElement(seekersItem).click();
        return this;
    }

    public SideMenuPage clickVacanciesItem() {
        driver.findElement(vacanciesItem).click();
        return this;
    }

    public SideMenuPage clickInterviewersItem() {
        driver.findElement(interviewersItem).click();
        return this;
    }

    public SideMenuPage clickInterviewsItem() {
        driver.findElement(interviewsItem).click();
        return this;
    }

    public SideMenuPage clickSidebarButton() {
        driver.findElement(sidebarButton).click();
        return this;
    }

}
