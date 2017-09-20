package ui.Projects;

import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import ui.*;
import utils.*;
import java.io.IOException;

import org.json.simple.JSONObject;

import java.util.concurrent.TimeUnit;


public class ListOfProject {

    WebDriver driver;
    ProjectsPage projectsPage;
    LoginPage loginPage;
    SideMenuPage sideMenuPage;
    CreateProjectPage crateProjectPage;
    APIClient client = new APIClient("https://interviewer1.testrail.net/");
    String BaseURL = "https://qa-interviewer.herokuapp.com/";

    @BeforeTest(groups = {"functest"})
    public void before() {
        client.setUser("oksana.gorbachenko.2009@gmail.com");
        client.setPassword("123456QWERTy");


        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        System.setProperty("webdriver.chrome.driver", ".\\chromedriver.exe");
        driver = new ChromeDriver(capabilities);
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
        projectsPage = new ProjectsPage(driver);
        loginPage = new LoginPage(driver);
        sideMenuPage = new SideMenuPage(driver);
        crateProjectPage = new CreateProjectPage(driver);

    }

    @Test(groups = {"functest", "47", "UI"})
    public void assertElementsOnCreateProjectPage() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/div/h3")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"link-to-list\"]")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("create-project-title")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("create-project-descr")).isDisplayed());
        String createDiabledButton = driver.findElement(By.id("create-project-submitBtn")).getAttribute("disabled");
        Assert.assertEquals(createDiabledButton, "true");
        Assert.assertTrue(driver.findElement(By.id("create-project-resetBtn")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/47", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }


}