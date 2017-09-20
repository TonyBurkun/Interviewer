package ui;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import ui.Projects.ProjectsPage;
import utils.*;
import java.io.IOException;

import org.json.simple.JSONObject;

import java.util.concurrent.TimeUnit;

public class SideMenu {
    LoginPage loginPage;
    SideMenuPage sideMenuPage;
    ProjectsPage projectsPage;
    WebDriver driver;
    APIClient client = new APIClient("https://interviewer1.testrail.net/");
    String BaseURL = "https://qa-interviewer.herokuapp.com/";



    @TestRun(id = "8")


    @BeforeSuite(groups = {"functest", "login"})
    public void beforeSuite(){client.setUser("oksana.gorbachenko.2009@gmail.com");
        client.setPassword("123456QWERTy");

        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        System.setProperty("webdriver.chrome.driver", ".\\chromedriver.exe");
        driver = new ChromeDriver(capabilities);

        loginPage = new LoginPage(driver);
        sideMenuPage = new SideMenuPage(driver);
        projectsPage = new ProjectsPage(driver);

        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
        loginPage.open();
    }

    @TestCase(id = "14")
    @Test(groups = {"functest", "14"})
    public void asserHideMenu() throws InterruptedException {

        driver.manage().window().setSize(new Dimension(700, 1000));
        Assert.assertTrue(driver.findElement(By.id("sidebar-collapse-btn")).isDisplayed());
        sideMenuPage.clickSidebarButton();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[1]/div")).isDisplayed());

    }


    @TestCase(id = "18")
    @Test(groups = {"functest", "18"})
    public void assertIconsOfMenuItems() throws InterruptedException {
        loginPage.open();
        driver.manage().window().maximize();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[1]/a/i[1]")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[1]/ul/li[1]/a/i")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[1]/ul/li[2]/a/i")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[2]/a/i")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[3]/a/i[1]")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[3]/a/i[1]")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[4]/a/i")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[1]/div/div[2]/div/ul/li[5]/a/i")).isDisplayed());

    }


    @TestCase(id = "19")
    @Test(groups = {"functest", "19"})
    public void assertChangingTemplateItem() throws InterruptedException {
        driver.manage().window().maximize();

        loginPage.open();
        sideMenuPage.clickUpcomingItem();
        String text_upcoming = driver.findElement(By.cssSelector("[class='title']")).getText();
        Assert.assertEquals(text_upcoming, "Upcoming interviews");

        sideMenuPage.clickCompletedItem();
        String text_completed = driver.findElement(By.cssSelector("[class='title']")).getText();
        Assert.assertEquals(text_completed, "Completed interviews");

        sideMenuPage.clickInterviewersItem();
        String text_interviewers = driver.findElement(By.cssSelector("[class='title']")).getText();
        Assert.assertEquals(text_interviewers, "Interviewers");

        sideMenuPage.clickVacanciesItem();
        sideMenuPage.clickOpenItem();
        String text_vacancies_open = driver.findElement(By.cssSelector("[class='title']")).getText();
        Assert.assertEquals(text_vacancies_open, "Open vacancies");

        sideMenuPage.clickClosedItem();
        String text_vacancies_closed = driver.findElement(By.cssSelector("[class='title']")).getText();
        Assert.assertEquals(text_vacancies_closed, "Closed vacancies");

        sideMenuPage.clickCandidatesItem();
        String text_candidates = driver.findElement(By.cssSelector("[class='title']")).getText();
        Assert.assertEquals(text_candidates, "Candidates");

        sideMenuPage.clickProjectsItem();
        String text_projects = driver.findElement(By.cssSelector("[class='title']")).getText();
        Assert.assertEquals(text_projects, "Projects");

    }


    public void assertDashboerd(){
        String href_dashboard = driver.findElement(By.cssSelector("[class='active']")).getAttribute("href");
        Assert.assertEquals(href_dashboard, BaseURL+"interviews-upcoming");

    }

    @TestCase(id = "20")
    @Test(groups = {"functest", "20"})
    public void assertActiveItem() throws InterruptedException {
        driver.manage().window().maximize();
        loginPage.open();
        sideMenuPage.clickUpcomingItem();
        String href_upcoming = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
        Assert.assertEquals(href_upcoming, BaseURL+"interviews-upcoming");
            assertDashboerd();

        sideMenuPage.clickCompletedItem();
        String href_completed = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
        Assert.assertEquals(href_completed, BaseURL+"interviews-completed");
            assertDashboerd();

        sideMenuPage.clickInterviewersItem();
        String href_interviewers = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
        Assert.assertEquals(href_interviewers, BaseURL+"interviewers");
            assertDashboerd();


        sideMenuPage.clickVacanciesItem();
        sideMenuPage.clickOpenItem();
        String href_openItem = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
        Assert.assertEquals(href_openItem, BaseURL+"vacancies-open");
            assertDashboerd();

        sideMenuPage.clickClosedItem();
        String href_closedItem = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
        Assert.assertEquals(href_closedItem, BaseURL+"vacancies-closed");
            assertDashboerd();

        sideMenuPage.clickCandidatesItem();
        String href_candidates = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
        Assert.assertEquals(href_candidates, BaseURL+"candidates");
            assertDashboerd();

        sideMenuPage.clickProjectsItem();
        String href_projects = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
        Assert.assertEquals(href_projects, BaseURL+"projects");
            assertDashboerd();

                projectsPage.clickMainCreateProjectButton();
                String project_button = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
                Assert.assertEquals(project_button, BaseURL+"projects");
                    assertDashboerd();

                sideMenuPage.clickProjectsItem();
                projectsPage.clickSomeProjectButton();
                String link_on_project = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
                Assert.assertEquals(link_on_project, BaseURL+"projects");
                    assertDashboerd();

                projectsPage.clickEditProjectButton();
                String edit_project_button = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
                Assert.assertEquals(edit_project_button, BaseURL+"projects");
                    assertDashboerd();

                projectsPage.clickSaveAftterEditButton();
                String save_after_edit_project_button = driver.findElement(By.cssSelector("[class='metismenu-link active']")).getAttribute("href");
                Assert.assertEquals(save_after_edit_project_button, BaseURL+"projects");
                    assertDashboerd();
    }


    @TestCase(id = "21")
    @Test(groups = {"functest", "21"})
    public void asserItemLinks() throws InterruptedException {
        driver.manage().window().maximize();

        sideMenuPage.clickUpcomingItem();
        String interviews_upcoming_utl = driver.getCurrentUrl();
        Assert.assertEquals(interviews_upcoming_utl, BaseURL+"interviews-upcoming");

        sideMenuPage.clickCompletedItem();
        String interviews_completed_utl = driver.getCurrentUrl();
        Assert.assertEquals(interviews_completed_utl, BaseURL+"interviews-completed");

        sideMenuPage.clickInterviewersItem();
        String interviewers_url = driver.getCurrentUrl();
        Assert.assertEquals(interviewers_url, BaseURL+"interviewers");

        sideMenuPage.clickVacanciesItem();
        sideMenuPage.clickOpenItem();
        String vacancies_open_url = driver.getCurrentUrl();
        Assert.assertEquals(vacancies_open_url, BaseURL+"vacancies-open");

        sideMenuPage.clickClosedItem();
        String vacancies_closed_url = driver.getCurrentUrl();
        Assert.assertEquals(vacancies_closed_url, BaseURL+"vacancies-closed");

        sideMenuPage.clickCandidatesItem();
        String candidates_url = driver.getCurrentUrl();
        Assert.assertEquals(candidates_url, BaseURL+"candidates");

        sideMenuPage.clickProjectsItem();
        String projects_url = driver.getCurrentUrl();
        Assert.assertEquals(projects_url, BaseURL+"projects");


    }


    @TestCase(id = "22")
    @Test(groups = { "22"})
    public void errorForFailFunc() throws InterruptedException {
        driver.manage().window().maximize();

    }
    //TODO If the functionality fails, the user hits a specific


    @AfterTest(groups = {"functest", "22"})
    public void after() { driver.quit();

    }
}
