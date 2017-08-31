package ui;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SideMenuPage {
    private final WebDriver driver;

    public SideMenuPage(WebDriver driver) {
        this.driver = driver;
    }

    By interviewsItem = By.xpath("//*[@id=\"sidebar-menu\"]/li[1]/a");
        By upcomingItem = By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[1]/ul/li[1]/a");
        By completedItem = By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[1]/ul/li[2]/a");
    By interviewersItem = By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[2]/a");
    By vacanciesItem = By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[3]/a");
         By openItem = By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[3]/ul/li[1]/a");
         By closedItem = By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[3]/ul/li[2]/a");
    By candidatesItem = By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[4]/a");
    By projectsItem = By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[5]/a");

    By sidebarButton = By.id("sidebar-collapse-btn");



    public SideMenuPage clickCandidatesItem() {
        driver.findElement(candidatesItem).click();
        return this;
    }
    public SideMenuPage clickClosedItem() {
        driver.findElement(closedItem).click();
        return this;
    }
    public SideMenuPage clickOpenItem() {
        driver.findElement(openItem).click();
        return this;
    }
    public SideMenuPage clickCompletedItem() {
        driver.findElement(completedItem).click();
        return this;
    }

    public SideMenuPage clickUpcomingItem() {
        driver.findElement(upcomingItem).click();
        return this;
    }

    public SideMenuPage clickProjectsItem() {
        driver.findElement(projectsItem).click();
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
